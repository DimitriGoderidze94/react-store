const inf0 = {
  data: {
    __schema: {
      queryType: {
        name: "Query",
      },
      mutationType: null,
      types: [
        {
          kind: "OBJECT",
          name: "Price",
          fields: [
            {
              name: "currency",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Currency",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "amount",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Float",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "SCALAR",
          name: "Float",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "Attribute",
          fields: [
            {
              name: "displayValue",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "value",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "id",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "SCALAR",
          name: "String",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "AttributeSet",
          fields: [
            {
              name: "id",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "name",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "type",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "items",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Attribute",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "Product",
          fields: [
            {
              name: "id",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "name",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "inStock",
              args: [],
              type: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "gallery",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "category",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "attributes",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "AttributeSet",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "prices",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "OBJECT",
                      name: "Price",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "brand",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "SCALAR",
          name: "Boolean",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "Category",
          fields: [
            {
              name: "name",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "products",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "Product",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "Currency",
          fields: [
            {
              name: "label",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "symbol",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "INPUT_OBJECT",
          name: "CategoryInput",
          fields: null,
          inputFields: [
            {
              name: "title",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "Query",
          fields: [
            {
              name: "categories",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Category",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "category",
              args: [
                {
                  name: "input",
                  type: {
                    kind: "INPUT_OBJECT",
                    name: "CategoryInput",
                    ofType: null,
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: "OBJECT",
                name: "Category",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "product",
              args: [
                {
                  name: "id",
                  type: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "SCALAR",
                      name: "String",
                      ofType: null,
                    },
                  },
                  defaultValue: null,
                },
              ],
              type: {
                kind: "OBJECT",
                name: "Product",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "currencies",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Currency",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "ENUM",
          name: "CacheControlScope",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: "PUBLIC",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "PRIVATE",
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: "SCALAR",
          name: "Upload",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "SCALAR",
          name: "Int",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__Schema",
          fields: [
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "types",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "OBJECT",
                      name: "__Type",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "queryType",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "mutationType",
              args: [],
              type: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "subscriptionType",
              args: [],
              type: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "directives",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "OBJECT",
                      name: "__Directive",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__Type",
          fields: [
            {
              name: "kind",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "ENUM",
                  name: "__TypeKind",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "name",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "specifiedByUrl",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "fields",
              args: [
                {
                  name: "includeDeprecated",
                  type: {
                    kind: "SCALAR",
                    name: "Boolean",
                    ofType: null,
                  },
                  defaultValue: "false",
                },
              ],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__Field",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "interfaces",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__Type",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "possibleTypes",
              args: [],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__Type",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "enumValues",
              args: [
                {
                  name: "includeDeprecated",
                  type: {
                    kind: "SCALAR",
                    name: "Boolean",
                    ofType: null,
                  },
                  defaultValue: "false",
                },
              ],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__EnumValue",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "inputFields",
              args: [
                {
                  name: "includeDeprecated",
                  type: {
                    kind: "SCALAR",
                    name: "Boolean",
                    ofType: null,
                  },
                  defaultValue: "false",
                },
              ],
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__InputValue",
                    ofType: null,
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "ofType",
              args: [],
              type: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "ENUM",
          name: "__TypeKind",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: "SCALAR",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "OBJECT",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INTERFACE",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "UNION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "ENUM",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INPUT_OBJECT",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "LIST",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "NON_NULL",
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__Field",
          fields: [
            {
              name: "name",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "args",
              args: [
                {
                  name: "includeDeprecated",
                  type: {
                    kind: "SCALAR",
                    name: "Boolean",
                    ofType: null,
                  },
                  defaultValue: "false",
                },
              ],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "OBJECT",
                      name: "__InputValue",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "type",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "isDeprecated",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "deprecationReason",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__InputValue",
          fields: [
            {
              name: "name",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "type",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "defaultValue",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "isDeprecated",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "deprecationReason",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__EnumValue",
          fields: [
            {
              name: "name",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "isDeprecated",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "deprecationReason",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "OBJECT",
          name: "__Directive",
          fields: [
            {
              name: "name",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "description",
              args: [],
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "isRepeatable",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "locations",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "ENUM",
                      name: "__DirectiveLocation",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "args",
              args: [],
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "OBJECT",
                      name: "__InputValue",
                      ofType: null,
                    },
                  },
                },
              },
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          inputFields: null,
          interfaces: [],
          enumValues: null,
          possibleTypes: null,
        },
        {
          kind: "ENUM",
          name: "__DirectiveLocation",
          fields: null,
          inputFields: null,
          interfaces: null,
          enumValues: [
            {
              name: "QUERY",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "MUTATION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "SUBSCRIPTION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "FIELD",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "FRAGMENT_DEFINITION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "FRAGMENT_SPREAD",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INLINE_FRAGMENT",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "VARIABLE_DEFINITION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "SCHEMA",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "SCALAR",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "OBJECT",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "FIELD_DEFINITION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "ARGUMENT_DEFINITION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INTERFACE",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "UNION",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "ENUM",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "ENUM_VALUE",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INPUT_OBJECT",
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "INPUT_FIELD_DEFINITION",
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          possibleTypes: null,
        },
      ],
      directives: [
        {
          name: "cacheControl",
          locations: ["FIELD_DEFINITION", "OBJECT", "INTERFACE"],
          args: [
            {
              name: "maxAge",
              type: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "scope",
              type: {
                kind: "ENUM",
                name: "CacheControlScope",
                ofType: null,
              },
              defaultValue: null,
            },
          ],
        },
        {
          name: "include",
          locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
          args: [
            {
              name: "if",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
        },
        {
          name: "skip",
          locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
          args: [
            {
              name: "if",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
        },
        {
          name: "deprecated",
          locations: [
            "FIELD_DEFINITION",
            "ARGUMENT_DEFINITION",
            "INPUT_FIELD_DEFINITION",
            "ENUM_VALUE",
          ],
          args: [
            {
              name: "reason",
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: '"No longer supported"',
            },
          ],
        },
        {
          name: "specifiedBy",
          locations: ["SCALAR"],
          args: [
            {
              name: "url",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
        },
      ],
    },
  },
};