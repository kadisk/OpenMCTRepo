import OpenMCT from 'openmct';

const openmct = OpenMCT;

// Apenas UTC system, sem clocks
openmct.time.addTimeSystem({
    key: 'utc',
    name: 'UTC',
    format: 'utc'
});

function SimplePlugin() {
    return function install(openmct) {
        openmct.types.addType('test.sensor', {
            name: 'Sensor Teste',
            cssClass: 'icon-telemetry'
        });

        openmct.objects.addProvider('test', {
            get: function(identifier) {
                return Promise.resolve({
                    identifier: identifier,
                    name: 'Meu Sensor',
                    type: 'test.sensor',
                    telemetry: {
                        values: [
                            { key: 'value', name: 'Valor' },
                            { key: 'time', name: 'Tempo', hints: { domain: 1 } }
                        ]
                    }
                });
            }
        });

        openmct.telemetry.addProvider({
            supportsSubscribe: function(domainObject) {
                return domainObject.type === 'test.sensor';
            },
            subscribe: function(domainObject, callback) {
                const interval = setInterval(() => {
                    callback({
                        value: Math.random() * 100,
                        time: Date.now()
                    });
                }, 2000);
                return () => clearInterval(interval);
            }
        });
    };
}

document.addEventListener('DOMContentLoaded', function() {
    openmct.install(SimplePlugin());
    
    // Configuração de tempo SIMPLES - apenas bounds fixos
    openmct.time.timeSystem('utc', {
        start: 0,
        end: Date.now() + 3600000
    });
    
    openmct.start(document.getElementById('openmct'));
    console.log('✅ OpenMCT rodando!');
});