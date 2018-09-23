{
  "name": "role-created",
  "temp": "rolecreated",
  "event-type": "10",
  "_id": "ChohJ",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "isenabled",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled11",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Server Data"
    },
    {
      "time": "7",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Role Info"
    },
    {
      "storage": "1",
      "varName": "name",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "rc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "logcount",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Role Info"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "3",
      "storage": "1",
      "varName2": "color",
      "name": "Store Role Info"
    },
    {
      "title": "Role Created",
      "author": "",
      "color": "${tempVars(\"color\")}",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Name",
      "message": "${tempVars(\"rolecreated\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Color",
      "message": "${tempVars(\"color\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID : ${tempVars(\"id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "rc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "logcount",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "rc_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    }
  ]
}