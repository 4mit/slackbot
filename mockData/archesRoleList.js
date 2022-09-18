const userRoleList = {
	member: [
		{
			id: 'e3c68bac-f0ec-402f-9d31-0ee680587f75',
			name: 'Alerts',
			tools: [
				{
					id: '68600f4b-95d5-4023-856f-e9f60d2e706f',
					name: 'FLAG',
					acronym: 'FLAG',
					hexColor: '#4a138b',
					environments: [
						{
							id: '29792d2e-f996-446b-b0cd-a0a056f3c725',
							name: 'ABC',
							acronym: 'ABC',
							hexColor: '#123124',
							url: 'https://abc.dpp.com/',
						},
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://staging.dcg-flag-web.dws.la/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'https://qa1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
					],
					frn: 'frn:cpe-arches-flag',
					s3BundleFolder: 'cpe-arches-flag',
				},
				{
					id: 'e9f5a648-116e-4107-b237-7a7136993bc2',
					name: 'Tool Management',
					acronym: 'TM',
					hexColor: '#000',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'http://tool-management.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'http://dev.tool-management.com/',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'http://qa.tool-management.com/',
						},
					],
				},
			],
		},
		{
			id: '4397a92a-1a22-404b-a030-14175da6c4b5',
			name: 'Airing Manager Owner',
			tools: [
				{
					id: '654770cb-35d0-4f37-a5a1-de0680b4a609',
					name: 'Airing Manager',
					acronym: 'AIR',
					hexColor: '#7e56c2',
					frn: 'frn:cpe-ms-airing-manager',
					s3BundleFolder: 'cpe-ms-airing-manager',
				},
			],
		},
		{
			id: 'a24b6872-9bfe-40da-a24e-89710d31578c',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: '03fdd17d-2330-40f0-99b7-d478196b6176',
			name: 'Event Manager',
			tools: [
				{
					id: '2df121e1-3e88-4274-a4f9-05d72138c3f4',
					name: 'Event Manager',
					acronym: 'Event',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-event-manager',
					s3BundleFolder: 'cpe-arches-event-manager',
				},
			],
		},
		{
			id: 'b8903ebd-c74d-40fc-b8e8-07987077aa5b',
			name: 'Tool Manager',
			tools: [
				{
					id: 'e9f5a648-116e-4107-b237-7a7136993bc2',
					name: 'Tool Management',
					acronym: 'TM',
					hexColor: '#000',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'http://tool-management.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'http://dev.tool-management.com/',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'http://qa.tool-management.com/',
						},
					],
				},
				{
					id: 'a5542fc7-447a-4181-bdd0-b75422552dea',
					name: 'Role Management',
					acronym: 'RM',
					hexColor: '#000',
				},
				{
					id: '667033b5-6474-4263-89aa-c2ab51b251dc',
					name: 'Policy Management',
					acronym: 'PM',
					hexColor: '#000',
				},
				{
					id: '2103eb81-8839-4efb-b764-7ca6c82e5034',
					name: 'User Management',
					acronym: 'UM',
					hexColor: '#000',
				},
			],
		},
		{
			id: 'ec556dc5-f2fd-4130-923a-3924fedd9301',
			name: 'Video Manager - KTTV',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: 'cd1fb947-f3ee-4154-8738-44f9d2cbd335',
			name: 'FLAG Admin',
			tools: [
				{
					id: '68600f4b-95d5-4023-856f-e9f60d2e706f',
					name: 'FLAG',
					acronym: 'FLAG',
					hexColor: '#4a138b',
					environments: [
						{
							id: '29792d2e-f996-446b-b0cd-a0a056f3c725',
							name: 'ABC',
							acronym: 'ABC',
							hexColor: '#123124',
							url: 'https://abc.dpp.com/',
						},
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://staging.dcg-flag-web.dws.la/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'https://qa1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
					],
					frn: 'frn:cpe-arches-flag',
					s3BundleFolder: 'cpe-arches-flag',
				},
			],
		},
		{
			id: '4f348d67-56ad-4171-86c2-048fd8c02e0b',
			name: 'Registry Developer',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'c8ab03f5-6765-419a-8e9c-1d219185ea97',
			name: 'MS FE Test Manager',
			tools: [
				{
					id: '0314f369-263c-4416-a18f-54129453b6dc',
					name: 'MS Events Front Test',
					acronym: 'MSFET',
					hexColor: '#6e4c41',
					frn: 'frn:cpe-ms-events-fe-test-repo',
					s3BundleFolder: 'cpe-ms-events-fe-test-repo',
				},
			],
		},
		{
			id: 'aee26fc7-de47-41e7-841f-dea82f201bfd',
			name: 'Show Manager',
			tools: [
				{
					id: 'c93ee004-e549-40a1-98b1-20931b72f93c',
					name: 'Show Manager',
					acronym: 'SHOW',
					hexColor: '#004e3f',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/',
						},
					],
					frn: 'frn:cpe-ms-show-manager',
					s3BundleFolder: 'cpe-ms-show-manager',
				},
			],
		},
		{
			id: '14b2d6bc-162f-42f5-8a4c-1daa4b54e1e9',
			name: 'Weather Video Manager',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: '64c06da6-c1c3-4333-bcb8-9efb202b2e66',
			name: 'Stream Controller Admin',
			tools: [
				{
					id: 'ed6b9841-37c9-42b5-956a-6a9c7a047a8c',
					name: 'Stream Controller Admin',
					acronym: 'SCA',
					hexColor: '#7e56c2',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/tool/sc-admin-frontend',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'https://qa1.arches.foxcpe.com/tool/sc-admin-frontend',
						},
					],
					frn: 'frn:sc-admin-frontend',
					s3BundleFolder: 'sc-admin-frontend',
				},
			],
		},
		{
			id: '9e2782ba-0cee-435e-879a-47a50df0a529',
			name: 'Station Manager Owner',
			tools: [
				{
					id: 'f2191139-08ab-4ff5-9663-6a67a80083bd',
					name: 'Station Manager',
					acronym: 'STAT',
					hexColor: '#004e3f',
					frn: 'frn:cpe-ms-station-manager',
					s3BundleFolder: 'cpe-ms-station-manager',
				},
			],
		},
		{
			id: '9f7aab24-a5f3-438d-8493-441523ace3c8',
			name: 'Keyart Manager Owner',
			tools: [
				{
					id: 'a64cbc45-36f5-496a-87c8-dd9b74062aac',
					name: 'Keyart Manager',
					acronym: 'KYRT',
					hexColor: '#d84316',
					frn: 'frn:cpe-keyart-manager',
					s3BundleFolder: 'cpe-keyart-manager',
				},
			],
		},
		{
			id: '9d423949-f25e-4416-82ab-9e8534d919a8',
			name: 'Blockout Manager',
			tools: [
				{
					id: '9caa4f67-9013-4160-99cc-79b2cb717b45',
					name: 'Blockout Manager',
					acronym: 'BOOM',
					hexColor: '#b61d1c',
					frn: 'frn:cpe-ms-blockout-manager',
					s3BundleFolder: 'cpe-ms-blockout-manager',
				},
			],
		},
		{
			id: 'e322acf3-3e34-4496-b61d-c69c6e8c25da',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'cab0fb0e-4284-449f-8772-24e3575e2262',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: '798b8a22-d45d-44ac-97d5-75acc9c2be41',
			name: 'JSONator Admin',
			tools: [
				{
					id: 'a64cbc45-36f5-496a-87c8-dd9b74062aac',
					name: 'Keyart Manager',
					acronym: 'KYRT',
					hexColor: '#d84316',
					frn: 'frn:cpe-keyart-manager',
					s3BundleFolder: 'cpe-keyart-manager',
				},
			],
		},
		{
			id: '9829cd2d-ba66-45f6-8673-6f2aa95038b7',
			name: 'Read User',
		},
		{
			id: '9b12f47f-6329-4603-be4f-3bbe62e121a7',
			name: 'Airing Manager - Operator',
			tools: [
				{
					id: '654770cb-35d0-4f37-a5a1-de0680b4a609',
					name: 'Airing Manager',
					acronym: 'AIR',
					hexColor: '#7e56c2',
					frn: 'frn:cpe-ms-airing-manager',
					s3BundleFolder: 'cpe-ms-airing-manager',
				},
			],
		},
		{
			id: '1ed893d6-83af-4606-9544-1ae98f5aebc3',
			name: 'Show Manager - admin',
			tools: [
				{
					id: 'c93ee004-e549-40a1-98b1-20931b72f93c',
					name: 'Show Manager',
					acronym: 'SHOW',
					hexColor: '#004e3f',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/',
						},
					],
					frn: 'frn:cpe-ms-show-manager',
					s3BundleFolder: 'cpe-ms-show-manager',
				},
			],
		},
		{
			id: 'a3b9129c-7df4-4625-9822-bc84299c3c86',
			name: 'LC3 Admin',
			tools: [
				{
					id: '68a1cf64-156b-4f45-9c53-8d87956196bc',
					name: 'Live Channel Control Center',
					acronym: 'LC3',
					hexColor: '#b61d1c',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.dpp.foxcpe.com/list/lc3',
						},
					],
				},
			],
		},
		{
			id: 'da3bfbd8-321c-4663-a0e0-aa258c5186ea',
			name: 'Arches Read Only',
			tools: [
				{
					id: 'e9f5a648-116e-4107-b237-7a7136993bc2',
					name: 'Tool Management',
					acronym: 'TM',
					hexColor: '#000',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'http://tool-management.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'http://dev.tool-management.com/',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'http://qa.tool-management.com/',
						},
					],
				},
				{
					id: '34f22cc3-a448-417e-8d47-9b8676fcac6f',
					name: 'Environment Management',
					acronym: 'EM',
					hexColor: '#000',
				},
				{
					id: 'a5542fc7-447a-4181-bdd0-b75422552dea',
					name: 'Role Management',
					acronym: 'RM',
					hexColor: '#000',
				},
				{
					id: '667033b5-6474-4263-89aa-c2ab51b251dc',
					name: 'Policy Management',
					acronym: 'PM',
					hexColor: '#000',
				},
				{
					id: '2103eb81-8839-4efb-b764-7ca6c82e5034',
					name: 'User Management',
					acronym: 'UM',
					hexColor: '#000',
				},
			],
		},
		{
			id: '6a963d6a-4fd1-46c1-94bd-d84994c153cd',
			name: 'Video Manager Owner',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: '19114e52-7be7-46c3-8bc1-b76aa8fa73a0',
			name: 'Registry User',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'f3b824ac-0cd2-46ef-b5ca-d0304c075323',
			name: 'Video Manager - WTVT',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: 'd034ef24-55eb-4751-9430-d371a3099feb',
			name: 'Password Reset Tool - Read Only',
			tools: [
				{
					id: '81c517fe-d551-43f1-8f70-8a25eba42c7d',
					name: 'Password Reset',
					acronym: 'PRT',
					hexColor: '#0488d1',
					frn: 'cpe-password-reset',
					s3BundleFolder: 'cpe-password-reset',
				},
			],
		},
		{
			id: '56f1f12e-65c2-481d-a298-1e20a685bbb7',
			name: 'Admin Password Reset',
			tools: [
				{
					id: '81c517fe-d551-43f1-8f70-8a25eba42c7d',
					name: 'Password Reset',
					acronym: 'PRT',
					hexColor: '#0488d1',
					frn: 'cpe-password-reset',
					s3BundleFolder: 'cpe-password-reset',
				},
			],
		},
		{
			id: '7f67b534-4bb4-4842-ad7d-a3be8d0dce73',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: '05ae1670-1ae7-487b-b14b-31a266299956',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'e7bb677c-811b-488b-b7b1-58768d4bb621',
			name: 'DPP Admin',
			tools: [
				{
					id: '28a86531-0ef5-43a5-aa26-b85d428f61e8',
					name: 'Digital Publishing Platform',
					acronym: 'DPP',
					hexColor: '#283593',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://prod1.dpp.foxcpe.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.dpp.foxcpe.com/',
						},
					],
				},
			],
		},
		{
			id: '73d6fe12-736f-48d5-ac31-7491f96dd1ce',
			name: 'Show Manager Owner',
			tools: [
				{
					id: 'c93ee004-e549-40a1-98b1-20931b72f93c',
					name: 'Show Manager',
					acronym: 'SHOW',
					hexColor: '#004e3f',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/',
						},
					],
					frn: 'frn:cpe-ms-show-manager',
					s3BundleFolder: 'cpe-ms-show-manager',
				},
			],
		},
		{
			id: '202ccd40-64b8-48f2-8000-e349579d873f',
			name: 'Registry Scaling Operator',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: '00f91dc8-46d3-494e-9eae-593061c826bf',
			name: 'Station Manager - Operator',
			tools: [
				{
					id: 'f2191139-08ab-4ff5-9663-6a67a80083bd',
					name: 'Station Manager',
					acronym: 'STAT',
					hexColor: '#004e3f',
					frn: 'frn:cpe-ms-station-manager',
					s3BundleFolder: 'cpe-ms-station-manager',
				},
			],
		},
		{
			id: 'c7dfe1eb-c444-49a9-87ef-d08e5090edf0',
			name: 'Admin Resource Manager',
		},
		{
			id: 'afa22922-7790-4a66-b6f8-8df7831323f8',
			name: 'Show Manager - operator',
			tools: [
				{
					id: 'c93ee004-e549-40a1-98b1-20931b72f93c',
					name: 'Show Manager',
					acronym: 'SHOW',
					hexColor: '#004e3f',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/',
						},
					],
					frn: 'frn:cpe-ms-show-manager',
					s3BundleFolder: 'cpe-ms-show-manager',
				},
			],
		},
		{
			id: '01fe0ab8-7cf5-4ae5-8004-bec73382dc83',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: '31a19f28-793d-4b2a-a86b-cace2d2452d6',
			name: 'Arches Admin',
			tools: [
				{
					id: 'e9f5a648-116e-4107-b237-7a7136993bc2',
					name: 'Tool Management',
					acronym: 'TM',
					hexColor: '#000',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'http://tool-management.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'http://dev.tool-management.com/',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'http://qa.tool-management.com/',
						},
					],
				},
				{
					id: '71f18d40-f3c0-4131-9ebf-b1febc8055b9',
					name: 'Arches Lib Tester',
					acronym: 'ALT',
					hexColor: '#004e3f',
					frn: 'frn:arches-lib-tester',
					s3BundleFolder: 'arches-lib-tester',
				},
				{
					id: '34f22cc3-a448-417e-8d47-9b8676fcac6f',
					name: 'Environment Management',
					acronym: 'EM',
					hexColor: '#000',
				},
				{
					id: 'a5542fc7-447a-4181-bdd0-b75422552dea',
					name: 'Role Management',
					acronym: 'RM',
					hexColor: '#000',
				},
				{
					id: '667033b5-6474-4263-89aa-c2ab51b251dc',
					name: 'Policy Management',
					acronym: 'PM',
					hexColor: '#000',
				},
				{
					id: '28a86531-0ef5-43a5-aa26-b85d428f61e8',
					name: 'Digital Publishing Platform',
					acronym: 'DPP',
					hexColor: '#283593',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://prod1.dpp.foxcpe.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.dpp.foxcpe.com/',
						},
					],
				},
				{
					id: '40a2de73-9701-44f7-99d5-67c275cfcce7',
					name: 'Resource Manager',
					acronym: 'RM',
					hexColor: '#b61d1c',
					frn: 'frn:arches',
					s3BundleFolder: '',
				},
				{
					id: 'a64cbc45-36f5-496a-87c8-dd9b74062aac',
					name: 'Keyart Manager',
					acronym: 'KYRT',
					hexColor: '#d84316',
					frn: 'frn:cpe-keyart-manager',
					s3BundleFolder: 'cpe-keyart-manager',
				},
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
				{
					id: '2103eb81-8839-4efb-b764-7ca6c82e5034',
					name: 'User Management',
					acronym: 'UM',
					hexColor: '#000',
				},
			],
		},
		{
			id: '8e950998-6341-4b55-8490-44503a9a21da',
			name: 'Test Role',
			tools: [
				{
					id: '68600f4b-95d5-4023-856f-e9f60d2e706f',
					name: 'FLAG',
					acronym: 'FLAG',
					hexColor: '#4a138b',
					environments: [
						{
							id: '29792d2e-f996-446b-b0cd-a0a056f3c725',
							name: 'ABC',
							acronym: 'ABC',
							hexColor: '#123124',
							url: 'https://abc.dpp.com/',
						},
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://staging.dcg-flag-web.dws.la/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'https://qa1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
					],
					frn: 'frn:cpe-arches-flag',
					s3BundleFolder: 'cpe-arches-flag',
				},
				{
					id: 'e9f5a648-116e-4107-b237-7a7136993bc2',
					name: 'Tool Management',
					acronym: 'TM',
					hexColor: '#000',
					environments: [
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'http://tool-management.com/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'http://dev.tool-management.com/',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'http://qa.tool-management.com/',
						},
					],
				},
			],
		},
		{
			id: 'f8c1ac60-5d9a-4b68-91ea-442b399e2235',
			name: 'Video Manager - Admin',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: '91675cf3-d00b-4b76-8eec-0e70b1c59721',
			name: 'AC Sample',
		},
		{
			id: '0fa7f5f6-62cc-4bde-8dca-bf707b44f113',
			name: 'Video Manager - FTS',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: '970cf9b2-946c-4c33-b5b8-e8e1f086231d',
			name: 'Blockout Manager - Admin',
			tools: [
				{
					id: '9caa4f67-9013-4160-99cc-79b2cb717b45',
					name: 'Blockout Manager',
					acronym: 'BOOM',
					hexColor: '#b61d1c',
					frn: 'frn:cpe-ms-blockout-manager',
					s3BundleFolder: 'cpe-ms-blockout-manager',
				},
			],
		},
		{
			id: 'f2be0e8b-a443-4c55-a107-c3d7876013d8',
			name: 'Registry Power User',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'c2b74d5e-250c-4c75-8d13-8f13717ca3f8',
			name: 'Registry Admin',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'e057d9bf-9649-4c92-aed8-04e09cb88fbc',
			name: 'Blockout Manager Read Only',
			tools: [
				{
					id: '9caa4f67-9013-4160-99cc-79b2cb717b45',
					name: 'Blockout Manager',
					acronym: 'BOOM',
					hexColor: '#b61d1c',
					frn: 'frn:cpe-ms-blockout-manager',
					s3BundleFolder: 'cpe-ms-blockout-manager',
				},
			],
		},
		{
			id: 'aa92aba9-3118-4cc6-9e3b-c883379fc681',
			name: 'Test External Tools',
			tools: [
				{
					id: 'c93ee004-e549-40a1-98b1-20931b72f93c',
					name: 'Show Manager',
					acronym: 'SHOW',
					hexColor: '#004e3f',
					environments: [
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/',
						},
					],
					frn: 'frn:cpe-ms-show-manager',
					s3BundleFolder: 'cpe-ms-show-manager',
				},
				{
					id: '6deb9258-8467-4442-b6e6-3bbd44213e4d',
					name: 'VOD Tribe Demo',
					acronym: 'VTD',
					hexColor: '#0488d1',
					frn: 'frn:vod-tribe-demo',
					s3BundleFolder: 'vod-tribe-demo',
				},
				{
					id: 'a64cbc45-36f5-496a-87c8-dd9b74062aac',
					name: 'Keyart Manager',
					acronym: 'KYRT',
					hexColor: '#d84316',
					frn: 'frn:cpe-keyart-manager',
					s3BundleFolder: 'cpe-keyart-manager',
				},
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
		{
			id: '0277666a-d71a-4ccc-851c-bacc7fc78756',
			name: 'Event Manager - Content Operator',
			tools: [
				{
					id: '2df121e1-3e88-4274-a4f9-05d72138c3f4',
					name: 'Event Manager',
					acronym: 'Event',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-event-manager',
					s3BundleFolder: 'cpe-arches-event-manager',
				},
			],
		},
		{
			id: '88878869-ceba-4d17-b070-460b9a2f3d26',
			name: 'Registry Namerd Developer',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'bc38a295-e5ec-4d64-8eb1-30f2b899aac9',
			name: 'Blockout Manager - Operator',
			tools: [
				{
					id: '9caa4f67-9013-4160-99cc-79b2cb717b45',
					name: 'Blockout Manager',
					acronym: 'BOOM',
					hexColor: '#b61d1c',
					frn: 'frn:cpe-ms-blockout-manager',
					s3BundleFolder: 'cpe-ms-blockout-manager',
				},
			],
		},
		{
			id: '76d25dc1-7685-4d88-a73f-2c80b872b082',
			name: 'FLAG',
			tools: [
				{
					id: '68600f4b-95d5-4023-856f-e9f60d2e706f',
					name: 'FLAG',
					acronym: 'FLAG',
					hexColor: '#4a138b',
					environments: [
						{
							id: '29792d2e-f996-446b-b0cd-a0a056f3c725',
							name: 'ABC',
							acronym: 'ABC',
							hexColor: '#123124',
							url: 'https://abc.dpp.com/',
						},
						{
							id: 'c3509413-ea12-4a96-a783-2d6e3477b40c',
							name: 'Production',
							acronym: 'PRD',
							hexColor: '#63b6f7',
							url: 'https://staging.dcg-flag-web.dws.la/',
						},
						{
							id: 'e14c8a6b-85a4-4ad5-b566-2a976368e0de',
							name: 'Development',
							acronym: 'DEV',
							hexColor: '#cedc39',
							url: 'https://dev1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
						{
							id: 'e902c00e-8002-4d25-be61-0828cd9aafa2',
							name: 'Quality Assurance',
							acronym: 'QA',
							hexColor: '#ef6291',
							url: 'https://qa1.arches.foxcpe.com/tool/cpe-arches-flag',
						},
					],
					frn: 'frn:cpe-arches-flag',
					s3BundleFolder: 'cpe-arches-flag',
				},
			],
		},
		{
			id: '12d5a7fc-ee57-4e08-8bfe-dbfeebf31b2f',
			name: 'Keyart Manager',
			tools: [
				{
					id: 'a64cbc45-36f5-496a-87c8-dd9b74062aac',
					name: 'Keyart Manager',
					acronym: 'KYRT',
					hexColor: '#d84316',
					frn: 'frn:cpe-keyart-manager',
					s3BundleFolder: 'cpe-keyart-manager',
				},
			],
		},
		{
			id: 'c4d0b133-272e-4e8b-9681-9f9960b16e39',
			name: 'Event Manager - Read Only',
			tools: [
				{
					id: '2df121e1-3e88-4274-a4f9-05d72138c3f4',
					name: 'Event Manager',
					acronym: 'Event',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-event-manager',
					s3BundleFolder: 'cpe-arches-event-manager',
				},
			],
		},
		{
			id: '6079750e-0893-4e97-aee2-dd4f02115856',
			name: '[available]',
			tools: [
				{
					id: 'a73dadc6-a459-4d86-9c82-267aa4101d8a',
					name: 'CPE - Registry',
					acronym: 'REG',
					hexColor: '#8bc34a',
					frn: 'frn:cpe-arches-registry',
					s3BundleFolder: 'cpe-arches-registry',
				},
			],
		},
		{
			id: 'b0ad2cb2-2b95-4ea7-8d51-f58f94b9ec1a',
			name: 'Blockout Manager Owner',
			tools: [
				{
					id: '9caa4f67-9013-4160-99cc-79b2cb717b45',
					name: 'Blockout Manager',
					acronym: 'BOOM',
					hexColor: '#b61d1c',
					frn: 'frn:cpe-ms-blockout-manager',
					s3BundleFolder: 'cpe-ms-blockout-manager',
				},
			],
		},
		{
			id: 'd52c072f-db9a-4ff0-aac3-09e0c4549bbd',
			name: 'Sports Video Manager',
			tools: [
				{
					id: 'bf02a459-c904-4d45-abd4-06fc3e95a9de',
					name: 'Video Manager',
					acronym: 'VM',
					hexColor: '#0488d1',
					frn: 'frn:cpe-ms-video-manager',
					s3BundleFolder: 'cpe-ms-video-manager',
				},
			],
		},
	],
	itemsPerPage: 250,
	totalItems: 56,
}

module.exports = {
	userRoleList,
}
