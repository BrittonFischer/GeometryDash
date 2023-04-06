"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60],{71777:e=>{e.exports=JSON.parse('{"functions":[{"name":"Mount","desc":"Mounts an interface to the supplied parent. If no parent is supplied, then\\nthe interface will be mounted to `GameGui`.\\n\\nTo mount interfaces to a BasePart, you can supply either a GuiBase, or a\\nSurfaceGui for the `interface` argument. You should then supply a BasePart\\nfor the `parent` argument. If you supply a GuiBase instead of a SurfaceGui,\\nthen the interface will be mounted to a new SurfaceGui.\\n\\nIf the interface is already mounted, then this function will return the\\n`UnmountKey` that was previously returned by `Mount()`.","params":[{"name":"interface","desc":"","lua_type":"GuiBase | GuiBase2d"},{"name":"parent","desc":"","lua_type":"Instance?"}],"returns":[{"desc":"","lua_type":"UnmountKey\\n"}],"function_type":"method","source":{"line":79,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}},{"name":"Unmount","desc":"Unmounts an interface that was previously mounted using `Mount()`. The\\nunmount process will be performed immediately, and will result in the\\ndestruction of the interface. If you supplied a `parent` argument to\\n`Mount()`, the `parent` object will **not** be destroyed.\\n\\nReturns a boolean indicating whether or not the interface was successfully\\nunmounted.","params":[{"name":"unmountKey","desc":"","lua_type":"UnmountKey"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"method","source":{"line":137,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}}],"properties":[{"name":"PlayerGui","desc":"Reference to the local player\'s `PlayerGui` object.","lua_type":"PlayerGui","readonly":true,"source":{"line":36,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}},{"name":"GameGui","desc":"Reference to the main ScreenGui object which contains any interfaces mounted\\nwithout explicitly providing a parent object to mount it to.","lua_type":"ScreenGui","readonly":true,"source":{"line":45,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}}],"types":[{"name":"UnmountKey","desc":"A key, specifically created using `newproxy()`, that can be used to unmount\\nan interface which was previously mounted using `Mount()`.","lua_type":"any","source":{"line":19,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}}],"name":"InterfaceController","desc":"","realm":["Client"],"source":{"line":25,"path":"src/ReplicatedStorage/Client/Controllers/InterfaceController.lua"}}')}}]);