/*
Config format:

{
    version: 1,
    scripts: {
        "something": {
            id: "something",
            on: "load",
            contents: "alert(2 + 2);"
        }
    }
}
*/

class ScriptManager {
    CONFIG_STORAGE_KEY = "scripts.config"

    reload() {
        this.config = JSON.parse(window.localStorage.getItem(CONFIG_STORAGE_KEY));
        this.run_all_on_load();
    }

    run_all_on_load() {
        this.config.scripts.forEach(script => {
            if (script.on == 'load') {
                this.run(script.id);
            }
        });
    }

    run(scriptId) {
        eval(this.config.scripts[scriptId].contents);
    }
}
