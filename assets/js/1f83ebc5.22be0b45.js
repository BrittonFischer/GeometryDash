"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{79620:e=>{e.exports=JSON.parse('{"functions":[{"name":"CreateCharacter","desc":"Creates a new character, and will destroy the current character if one already exists.","params":[],"returns":[],"function_type":"method","source":{"line":173,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}}],"properties":[{"name":"Character","desc":"The current Character component.","lua_type":"Character","source":{"line":30,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterPosition","desc":"The position of the character model, updated every frame that the character exists.","lua_type":"Vector3","source":{"line":36,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterEnum","desc":"Same as ``Character.Enum``, from the Character Component.","lua_type":"table","source":{"line":42,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"_janitor","desc":"Controls the cleanup of the character and all associated events.","lua_type":"Janitor","private":true,"source":{"line":49,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterAdded","desc":"Event that fires whenever a new character is created.\\n\\nCalled with:\\n```\\ncharacter: Character -- The new character component\\ncharacterPosition: Vector3 -- The spawn position of the character\\n```","lua_type":"GoodSignal","tags":["events"],"source":{"line":62,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterMoved","desc":"Event that fires when the character moves. Takes into account the player ground offset, and fires with the fake model position rather than the true player position,\\nsince the true player position is only necessary for physics calculations.\\n\\nCalled with:\\n```\\nnewPosition: Vector3 -- The new position of the character model\\noldPosition: Vector3 -- The old position of the character model\\ncharacterOffset: number -- The offset of the character to reach the ground (in world space)\\n```","lua_type":"GoodSignal","tags":["events"],"source":{"line":77,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterDied","desc":"Event that fires when the character dies.\\n\\nCalled with:\\n```\\nposition: Vector3 -- The true position of the character model at the moment it dies\\n```","lua_type":"GoodSignal","tags":["events"],"source":{"line":89,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterStateChanged","desc":"Event that fires when the character changes states.\\n\\nCalled with:\\n```\\nstate: StateChanged -- The new state of the character\\n```","lua_type":"GoodSignal","tags":["events"],"source":{"line":101,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}},{"name":"CharacterDestroyed","desc":"Event that fires when the character is destroyed. Is not called with anything.","lua_type":"GoodSignal","tags":["events"],"source":{"line":108,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}}],"types":[],"name":"CharacterController","desc":"Controls anything related to the character.","realm":["Client"],"source":{"line":20,"path":"src/ReplicatedStorage/Client/Controllers/CharacterController.lua"}}')}}]);