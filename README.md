# KADISK Corporate Repository

## Configuração
Para que os componente desse repositório possa ser usado é preciso que seja registrado no ecosistema que ele sera usado
 ```bash
repo register source OpenMCTRepo LOCAL_FS --localPath ~/OpenMCTRepo

# Verifique com
repo sources
 ```


## Aplicativos

```bash
repo install OpenMCTRepo LOCAL_FS --executables "example-open-mct"
```


## Atualizando o repositório no ecosistema

```bash
repo update OpenMCTRepo LOCAL_FS
```