const openmct = require("openmct")

openmct.setAssetPath('openmct/dist')
openmct.install(openmct.plugins.LocalStorage())
openmct.install(openmct.plugins.MyItems())
openmct.install(openmct.plugins.UTCTimeSystem())
openmct.time.setClock('local')
openmct.time.setClockOffsets({start: -15 * 60 * 1000, end: 0})
openmct.time.setTimeSystem('utc')
openmct.install(openmct.plugins.Espresso())

openmct.install(DictionaryPlugin())
openmct.install(HistoricalTelemetryPlugin())
openmct.install(RealtimeTelemetryPlugin())
document.addEventListener('DOMContentLoaded', function () {
    openmct.start()
})