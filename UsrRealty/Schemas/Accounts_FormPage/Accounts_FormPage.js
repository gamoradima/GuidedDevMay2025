define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AccountInfoFieldsContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "AnnualRevenue"
			},
			{
				"operation": "remove",
				"name": "EmployeesNumber"
			},
			{
				"operation": "remove",
				"name": "AddressSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "AddressSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddressSearchFilter_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"AddressSearchFilter_SearchValue",
							"AddressSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "ContactsSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ContactsSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactsSearchFilter_ContactsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContactsList"
										]
									}
								]
							}
						],
						"from": [
							"ContactsSearchFilter_SearchValue",
							"ContactsSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "WebsiteCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrWebsiteCode_gcjb1pz",
					"labelPosition": "auto",
					"control": "$PDS_UsrWebsiteCode_gcjb1pz"
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_ahawr95",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Code_gwlye6s",
					"labelPosition": "auto",
					"control": "$PDS_Code_gwlye6s"
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrWebsiteCode_gcjb1pz": {
						"modelConfig": {
							"path": "PDS.UsrWebsiteCode"
						}
					},
					"PDS_Code_gwlye6s": {
						"modelConfig": {
							"path": "PDS.Code"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "AddressList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "AddressSearchFilter_AddressList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ContactsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "ContactsList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "ContactsSearchFilter_ContactsList",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});