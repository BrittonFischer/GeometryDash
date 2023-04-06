"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[123],{86993:e=>{e.exports=JSON.parse('{"functions":[{"name":"_loadData","desc":"Load\'s a player\'s data, if not yet loaded/loading. Abstracts interaction with ProfileService to strictly be through ``DataService``.","params":[{"name":"player","desc":"The player to load the data for","lua_type":"Player"}],"returns":[],"function_type":"method","private":true,"source":{"line":135,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"BindToDataLoaded","desc":"Binds a function to be called whenever player data loads. \\nWill also call the function with player data that has already been loaded, unlike the ``.DataLoaded`` event.\\n\\nSee ``.DataLoaded`` for information on what this event is fired with.","params":[{"name":"callback","desc":"The function to call whenever a player\'s data loads","lua_type":"(player: Player, data: { [string]: any }) -> ()"}],"returns":[{"desc":"Connection for the player\'s data loaded, call :Disconnect() to destroy this connection","lua_type":"Connection"}],"function_type":"method","source":{"line":233,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"BindToDataChanged","desc":"Binds a function to be called whenever player data changes for a given key. \\nWill also call the function with player data that has already been loaded, unlike the ``.DataChanged`` events.\\n\\nSee ``.DataChanged`` for information on what this event is fired with.","params":[{"name":"key","desc":"The key to bind the function to","lua_type":"string"},{"name":"func","desc":"The function to call whenever a player\'s data changes at a given key","lua_type":"(...any) -> ()"}],"returns":[{"desc":"Connection for the player\'s data changes, call :Disconnect() to destroy this connection","lua_type":"Connection"}],"function_type":"method","errors":[{"lua_type":"\\"KeyNotString\\"","desc":"If key is not a string"},{"lua_type":"\\"KeyDoesNotExist\\"","desc":"If the provided key does not exist within the data structure"}],"source":{"line":259,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"Get","desc":"Gets a player\'s data from the data system. The same as calling ``Data:Get(key)`` on the player\'s ``Data`` object.","params":[{"name":"player","desc":"The player to get the data for","lua_type":"Player"},{"name":"key","desc":"The key to use as the index for the player data","lua_type":"string"}],"returns":[{"desc":"The value at data[key] for a player\'s data, nil if the data at the given key does not exist","lua_type":"any?"}],"function_type":"method","errors":[{"lua_type":"\\"KeyNotString\\"","desc":"If key is not a string"},{"lua_type":"\\"KeyDoesNotExist\\"","desc":"If the key does not exist within the data structure (BASE_PROFILE dictionary)"},{"lua_type":"\\"DataDoesNotExist\\"","desc":"If the player\'s profile has been released"}],"source":{"line":289,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"GetAsync","desc":"data at the given key does not exist. It will reject with a \\"DataDoesNotExist\\" error if the player\'s profile is\\nreleased.\\n\\n\\nAsynchronously gets a player\'s data from the data system. The same as calling ``Data:Get(key)`` on the player\'s\\n``Data`` object.","params":[{"name":"player","desc":"The player to get the data for","lua_type":"Player"},{"name":"key","desc":"The key to use as the index for the player data","lua_type":"string"}],"returns":[{"desc":"A promise that is either resolved with the value at data[key] for a player\'s data, or nil if the","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"KeyNotString\\"","desc":"If key is not a string"},{"lua_type":"\\"KeyDoesNotExist\\"","desc":"If the key does not exist within the data structure (BASE_PROFILE dictionary)"}],"yields":true,"source":{"line":318,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"GetDataPromise","desc":"Gets a player\'s data from the data system. The same as calling ``Data:Get(key)`` on the player\'s ``Data`` object.\\nThis is used internally for certain methods, and externally so that you can do custom data manipulation.","params":[{"name":"player","desc":"The player to get the data for","lua_type":"Player"}],"returns":[{"desc":"Promise that resolves with the player\'s Data component, or throws an error.","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"DataDoesNotExist\\"","desc":"If the player\'s profile has been released"}],"source":{"line":342,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"SetAsync","desc":"the player\'s profile is released.\\n\\n\\nSets a player\'s data in the data system asynchronously. The same as calling ``Data:Set(key)`` on the player\'s\\n``Data`` object. It returns a promise that will reject with \\"DataDoesNotExist\\" if the player\'s profile has been\\nreleased.","params":[{"name":"player","desc":"The player to get the data for","lua_type":"Player"},{"name":"key","desc":"The key to use as the index for the player data","lua_type":"string"},{"name":"value","desc":"The value to set the player data at key to","lua_type":"any"}],"returns":[{"desc":"A promise that is either resolved automatically, or rejected with a \\"DataDoesNotExist\\" error if","lua_type":"Promise"}],"function_type":"method","errors":[{"lua_type":"\\"KeyNotString\\"","desc":"If key is not a string"},{"lua_type":"\\"KeyDoesNotExist\\"","desc":"If the key does not exist within the data structure (BASE_PROFILE dictionary)"},{"lua_type":"\\"DataDoesNotExist\\"","desc":"If the player\'s profile has been released"},{"lua_type":"\\"ValueIsNil\\"","desc":"If no value was provided, you cannot set a data value to nil"}],"yields":true,"source":{"line":383,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"IncrementAsync","desc":"Gets a player\'s data from the data system. The same as calling ``Data:Get(key)`` on the player\'s ``Data`` object.","params":[{"name":"player","desc":"The player to get the data for","lua_type":"Player"},{"name":"key","desc":"The key to use as the index for the player data","lua_type":"string"},{"name":"increment","desc":"The amount to increment the player data at key by","lua_type":"number"}],"returns":[{"desc":"The value at data[key] for a player\'s data","lua_type":"any"}],"function_type":"method","errors":[{"lua_type":"\\"KeyNotString\\"","desc":"If key is not a string"},{"lua_type":"\\"KeyDoesNotExist\\"","desc":"If the key does not exist within the data structure (BASE_PROFILE dictionary)"},{"lua_type":"\\"DataDoesNotExist\\"","desc":"If the player\'s profile has been released"},{"lua_type":"\\"ValueIsNotANumber\\"","desc":"If the value at data[key] is not a number, you cannot increment anything that isn\'t a number"},{"lua_type":"\\"IncrementIsNotANumber\\"","desc":"If the increment is not a number"}],"yields":true,"source":{"line":414,"path":"src/ServerScriptService/Services/DataService.lua"}}],"properties":[{"name":"DataLoaded","desc":"An event that is fired whenever a new player\'s data is loaded. \\nYou might consider using ``:BindToDataLoaded()`` if you need it to also call the function you want to connect with all existing player data aswell.\\n\\nFired with:\\n```\\nPlayer -- The player who \\"owns\\" the Data object\\nData -- The Data object for the specific Player\\n```","lua_type":"Signal","tags":["events"],"source":{"line":54,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"DataReleased","desc":"An event that is fired whenever a player\'s data is released.\\n\\nFired with:\\n```\\nPlayer -- The player who \\"owned\\" the Data object that has since been destroyed\\n```","lua_type":"Signal","tags":["events"],"source":{"line":66,"path":"src/ServerScriptService/Services/DataService.lua"}},{"name":"DataChanged","desc":"An event that is fired whenever a player\'s data changes. \\nYou might consider using ``:BindToDataChanged()`` if you need it to also call the function you want to connect with all current player data aswell.\\n\\nEach event for a specific key is fired with:\\n```\\nPlayer -- The player who \\"owns\\" the Data object\\nany -- The new value of the player\'s data at the provided key\\n```\\n\\nSee BASE_PROFILE for information on what data key\'s exist.","lua_type":"{ [string]: Signal }","tags":["events"],"source":{"line":82,"path":"src/ServerScriptService/Services/DataService.lua"}}],"types":[],"name":"DataService","desc":"Handles the data for all Player\'s currently in the server. \\nUses [ProfileService](https://madstudioroblox.github.io/ProfileService/) and [ReplicaService](https://madstudioroblox.github.io/ReplicaService/) for data storage and replication.\\nAbstracts data handling to 3 methods, ``:Get()``, ``:Set()``, and ``:Increment()``","source":{"line":35,"path":"src/ServerScriptService/Services/DataService.lua"}}')}}]);