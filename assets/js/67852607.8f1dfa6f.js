"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[601],{11028:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new ``Map`` object from a given map file.","params":[{"name":"baseMap","desc":"The folder to use as the map file\'s base","lua_type":"folder"},{"name":"leftVision","desc":"The vision the character has to the left (# of chunks before an object is deleted)","lua_type":"number"},{"name":"rightVision","desc":"The vision the character has to the right (# of chunks before an object is inserted)","lua_type":"number"}],"returns":[{"desc":"the Map object","lua_type":"Map"}],"function_type":"static","source":{"line":85,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"Destroy","desc":"Destroys and cleans up the current Map object.","params":[],"returns":[],"function_type":"method","source":{"line":218,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"Reload","desc":"Reloads the current map file","params":[{"name":"resetAttempts","desc":"Whether or not to reset the number of attempts displayed. (Used when a character beats a map)","lua_type":"boolean"}],"returns":[{"desc":"Array of chunks initially loaded into the map","lua_type":"Chunk[]"},{"desc":"The map\'s Character starting position","lua_type":"Vector3"}],"function_type":"method","source":{"line":237,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"Move","desc":"Moves the loaded based on the ``Character``\'s movement. Will load/unload chunks as necessary. Also handles action updating by calling their ``:Update()`` method.","params":[{"name":"character","desc":"The current character object","lua_type":"Character"},{"name":"newPosition","desc":"The new position of the character model in the world space","lua_type":"Vector3"}],"returns":[],"function_type":"method","source":{"line":357,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}}],"properties":[{"name":"Chunks","desc":"Contains all of the currently loaded map chunks.\\n\\n\\nself.Chunks = {} -- Chunk[], contains all of the loaded map chunks\\nself.StaticsFolder = staticsFolder -- contains all static objects\\nself.ChunksFolder = chunksFolder -- contains all raw chunk objects","lua_type":"Chunk[]","source":{"line":58,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"StaticsFolder","desc":"Contains all of the Static map objects. Note that by Static here, it doesn\'t mean they don\'t move, but rather that they are abstracted from the chunk loading/unloading system.\\nBasically it contains all of the ``Instance``\'s which are permanently loaded into the map. This is useful for things like backgrounds, flooring, ceiling, etc.","lua_type":"Folder","source":{"line":66,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"ChunksFolder","desc":"Contains all of the raw chunk data. This is parsed and stored in the ``Chunks`` property.","lua_type":"Folder","source":{"line":73,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}}],"types":[{"name":"ChunkData","desc":"","fields":[{"name":"Instance","lua_type":"BasePart","desc":"The BasePart that the chunk data is based on"},{"name":"CFrame","lua_type":"CFrame","desc":"The initial CFrame of the Instance"},{"name":"Image","lua_type":"ImageLabel?","desc":"The image label for the Instance, if applicable"},{"name":"Action","lua_type":"Dict?","desc":"More information to come"}],"source":{"line":31,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}},{"name":"Chunk","desc":"Chunk data is used to map out a chunk. Chunk mapping is done for all chunks in a Map whenever ``Map.new()`` is called.","fields":[{"name":"Folder","lua_type":"Folder","desc":"Folder containing that chunk\'s objects"},{"name":"Actions","lua_type":"ChunkData[]","desc":"ChunkData for all actions within that chunk"},{"name":"Collidables","lua_type":"ChunkData[]","desc":"ChunkData for all collidable objects within that chunk"},{"name":"Uncollidables","lua_type":"ChunkData[]","desc":"ChunkData for all uncollidable objects within that chunk"}],"source":{"line":43,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}}],"name":"Map","desc":"Controls the chunk distribution, animations, and actions of a given map file. \\nYou can only have 1 Map object loaded at a time, calling ``Map.new()`` on a new map file will delete the existing one.","source":{"line":19,"path":"src/ReplicatedStorage/Client/Components/Map.lua"}}')}}]);