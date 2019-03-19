export const sample = {
    "$schema": "https://raw.githubusercontent.com/teleporthq/teleport-code-generators/master/src/uidl-definitions/schemas/component.json",
    "name": "AuthorCard",
    "propDefinitions": {
      "authorName": {
        "type": "string",
        "defaultValue": "TeleportHQ Rocks"
      },
      "avatarUrl": {
        "type": "string",
        "defaultValue": "https://picsum.photos/150/150"
      },
      "direction": {
        "type": "string",
        "defaultValue": "row"
      }
    },
    "content": {
      "type": "container",
      "name": "container",
      "style": {
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "flexDirection": "left"
      },
      "children": [
        {
          "type": "container",
          "name": "image-container",
          "style": {
            "backgroundColor": "#333",
            "borderRadius": "50%",
            "display": "block",
            "width": 150,
            "height": 150,
            "overflow": "hidden",
            "border": "none"
          },
          "children": [
            {
              "type": "image",
              "name": "img",
              "attrs": {
                "src": "https://picsum.photos/150/150",
                "alt": "Jaya Krishna"
              }
            }
          ]
        },
        {
          "type": "container",
          "name": "details-container",
          "style": {
            "flexDirection": "column",
            "flex": 1,
            "marginLeft": "20px"
          },
          "children": [
            {
              "type": "h3",
              "name": "autor-name",
              "style": {
                "backgroundColor": "#333",
                "borderRadius": "50%",
                "display": "block",
                "width": 150,
                "height": 150,
                "overflow": "hidden",
                "border": "none"
              },
              "children": ["Jaya Krishna", "Another child"]
            },
            {
              "type": "container",
              "name": "autor-desription",
              "children": ["Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla laoreet metus a nulla rhoncus, et aliquet turpis lacinia."]
            },
            {
                "type": "input",
                "name": "css-class"
            }
          ]
        }
      ]
    }
  }
  