#!/usr/bin/env node
/**
 * Created by EMICHAF on 2016-12-28.
 */
module.exports = {

    // /start -- event_objects

    event_EiffelArtifactCreatedEvent_3 :
        {
            "links": [
                {
                    "target": "fb6ef12d-25fb-4d77-b9fd-87688e66de47",
                    "type": "COMPOSITION"
                },
                {
                    "target": "c4f9565d-2382-488f-b911-e3326bce21a3",
                    "type": "ENVIRONMENT"
                },
                {
                    "target": "c04fa59a-3c36-4601-8eac-7a26b8910f08",
                    "type": "CONTEXT"
                }
            ],
            "meta": {
                "id": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875891763,
                "type": "EiffelArtifactCreatedEvent",
                "version": "1.0.0"
            },
            "data": {
                "customData": [
                    {
                        "value": "ArtC2",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ],
                "fileInformation": [
                    {
                        "classifier": "",
                        "extension": "jar"
                    }
                ],
                "gav": {
                    "artifactId": "sub-system",
                    "version": "1.1.0",
                    "groupId": "com.mycompany.myproduct"
                }
            }
        },


       event_EiffelSourceChangeCreatedEvent_3 : {
            "meta": {
                "type": "EiffelSourceChangeCreatedEvent",
                "version": "1.0.0",
                "time": 1234567890,
                "id": "fb6ef12d-25fb-4d77-b9fd-5fktsrefe66de47",
                "source": {
                "domainId": "example.domain"
                }
            },
            "data": {
                "gitIdentifier": {
                "commitId": "fd090b60a4aedc5161da9c035a49b14a319829b4",
                "branch": "myBranch",
                "repoName": "myPrivateRepo",
                "repoUri": "https://github.com/johndoe/myPrivateRepo.git"
                },
                "author": {
                "name": "John Doe",
                "email": "john.doe@company.com",
                "id": "johndoe",
                "group": "Team Gophers"
                },
                "change": {
                "files": "https://company.com/changes/fd090b60a4aedc5161da9c035a49b14a319829b4",
                "insertions": 173,
                "deletions": 79,
                "tracker": "GitHub",
                "details": "https://github.com/johndoe/myPrivateRepo/commit/fd090b60a4aedc5161da9c035a49b14a319829b4",
                "id": "42"
                },
                "issues": [
                {
                    "type": "BUG",
                    "tracker": "JIRA",
                    "id": "JIRA-1234",
                    "uri": "http://jira.company.com/browse/JIRA-1234",
                    "transition": "RESOLVED"
                }
                ]
            },
            "links": [
                {
                "type": "BASE",
                "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43"
                },
                {
                "type": "PREVIOUS_VERSION",
                "target": "6acc3c87-75e0-4b6d-88f5-b1a5dcd62b43"
                }
            ]
            },

        event_EiffelSourceChangeSubmittedEvent_3 : {
            "meta": {
                    "type": "EiffelSourceChangeSubmittedEvent",
                    "version": "1.0.0",
                    "time": 1234567890,
                    "id": "fb6efi4n-25fb-4d77-b9fd-5f2xrrefe66de47",
                    "source": {
                    "domainId": "example.domain"
                    }
                },
                "data": {
                    "svnIdentifier": {
                    "revision": 42,
                    "directory": "trunk",
                    "repoName": "Mainline",
                    "repoUri": "svn://repohost/mainline"
                    },
                    "submitter": {
                    "name": "Jane Doe",
                    "email": "jane.doe@company.com",
                    "id": "j_doe",
                    "group": "Team Wombats"
                    }
                },
                "links": [
                    {
                    "type": "CHANGE",
                    "target": "fb6ef12d-25fb-4d77-b9fd-5fktsrefe66de47"
                    },
                    {
                    "type": "PREVIOUS_VERSION",
                    "target": "6acc3c87-75e0-4b6d-88f5-bd4gv4e62b43"
                    }
                ]
                },               

    event_EiffelArtifactPublishedEvent_3 :

        {
            "links": [
                {
                    "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                    "type": "ARTIFACT"
                },
                {
                    "target": "c04fa59a-3c36-4601-8eac-7a26b8910f08",
                    "type": "CONTEXT"
                }
            ],
            "meta": {
                "id": "33d05e6f-9bd9-4138-83b6-e20cc74680a3",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875921763,
                "type": "EiffelArtifactPublishedEvent",
                "version": "1.0.0"
            },
            "data": {
                "customData": [
                    {
                        "value": "ArtP2",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ],
                "locations": [
                    {
                        "uri": "https://myrepository.com/mySubSystemArtifact",
                        "type": "PLAIN"
                    }
                ]
            }
        },

    event_EiffelConfidenceLevelModifiedEvent_3_2 :

        {
            "links": [
                {
                    "target": "40df7fc4-0c40-40a3-a349-9f6da0ba81c5",
                    "type": "CAUSE"
                },
                {
                    "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                    "type": "SUBJECT"
                }
            ],
            "meta": {
                "id": "f37d59a3-069e-4f4c-8cc5-a52e73501a75",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875944272,
                "type": "EiffelConfidenceLevelModifiedEvent",
                "version": "1.0.0"
            },
            "data": {
                "value": "SUCCESS",
                "customData": [
                    {
                        "value": "CLM3",
                        "key": "name"
                    },
                    {
                        "value": 2,
                        "key": "iteration"
                    }
                ],
                "name": "readyForDelivery"
            }
        },
        
            event_EiffelConfidenceLevelModifiedEvent_3 :

        {
            "links": [
                {
                    "target": "40df7fc4-0c40-40a3-a349-9f6da0ba81c5",
                    "type": "CAUSE"
                },
                {
                    "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                    "type": "SUBJECT"
                }
            ],
            "meta": {
                "id": "f37d59a3-069e-4f4c-8cc5-a52e73501a75",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875944272,
                "type": "EiffelConfidenceLevelModifiedEvent",
                "version": "1.0.0"
            },
            "data": {
                "value": "SUCCESS",
                "customData": [
                    {
                        "value": "CLM2",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ],
                "name": "readyForSystemIntegration"
            }
        },
        
        event_EiffelActivityTriggeredEvent_3:
        {
        	  "meta": {
        	    "id": "e1e93f13-7c3c-4f17-9753-ebf0c86ff1c2",
        	    "type": "EiffelActivityTriggeredEvent",
        	    "version": "1.0.0",
        	    "time": 1234567890
        	  },
        	  "data": {
        	    "name": "Component X Build",
        	    "categories": [
        	      "Component Build"
        	    ],
        	    "triggers": [
        	      {
        	        "type": "MANUAL",
        	        "description": "Triggered by EiffelConfidenceLevelModifiedEvent"
        	      }
        	    ],
        	    "executionType": "AUTOMATED"
        	  },
        	  "links": [
        	    {
        	      "type": "CAUSE",
        	      "target": "f37d59a3-069e-4f4c-8cc5-a52e73501a75"
        	    }
        	  ]
        	},
        
        	event_EiffelActivityStartedEvent_3:
        	{
        		"meta": {
        			"type": "EiffelActivityStartedEvent",
        			"version": "1.0.0",
        			"time": 1234567890,
        			"id": "e1e93f13-7c3c-4f17-9753-ebf0c7f4sey1c2"
        		},
        		"data": {
        			"executionUri": "https://my.jenkins.host/myJob/43",
        			"liveLogs": [
        			             {
        			            	 "name": "My build log",
        			            	 "uri": "file:///tmp/logs/data.log"
        			             }
        			             ]
        		},
        		"links": [
        		          {
        		        	  "type": "ACTIVITY_EXECUTION",
        		        	  "target": "e1e93f13-7c3c-4f17-9753-ebf0c86ff1c2"
        		          }
        		          ]
        	},
        	  
        	event_EiffelActivityFinishedEvent_3:
        	{
        		  "meta": {
        		    "type": "EiffelActivityFinishedEvent",
        		    "version": "1.0.0",
        		    "time": 1234567890,
        		    "id": "e1e93f13-7c3c-3f17-975f-ebf0cd6ff1c2"
        		  },
        		  "data": {
        		    "outcome": {
        		      "conclusion": "TIMED_OUT",
        		      "description": "Compilation timed out."
        		    },
        		    "persistentLogs": [
        		      {
        		       "name": "firstLog",
        		       "uri": "http://myHost.com/firstLog"
        		      },
        		      {
        		       "name": "otherLog",
        		       "uri": "isbn:0-486-27557-4"
        		      }
        		    ]
        		  },
        		  "links": [
        		    {
        		      "type": "ACTIVITY_EXECUTION",
        		      "target": "e1e93f13-7c3c-4f17-9753-ebf0c86ff1c2"
        		    }
        		  ]
        		},

    event_EiffelTestCaseStartedEvent_3:

        {
            "links": [
                {
                    "target": "5ac05ae1-d7a2-4ef0-be0b-670ee4e8a8cf",
                    "type": "CONTEXT"
                },
                {
                    "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                    "type": "IUT"
                }
            ],
            "meta": {
                "id": "cb9d64b0-a6e9-4419-8b5d-a650c27c59ca",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875925916,
                "type": "EiffelTestCaseStartedEvent",
                "version": "1.0.0"
            },
            "data": {
                "testCase": {
                    "id": "TC5",
                    "uri": "https://other-tm.company.com/testCase/TC5",
                    "tracker": "My Other Test Management System"
                },
                "customData": [
                    {
                        "value": "TCS5",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ]
            }
        },


    event_EiffelTestCaseFinishedEvent_3:

        {
            "links": [
                {
                    "target": "cb9d64b0-a6e9-4419-8b5d-a650c27c59ca",
                    "type": "TEST_CASE_EXECUTION"
                }
            ],
            "meta": {
                "id": "11109351-41e0-474a-bc1c-f6e81e58a1c9",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875935919,
                "type": "EiffelTestCaseFinishedEvent",
                "version": "1.0.0"
            },
            "data": {
                "outcome": {
                    "verdict": "PASSED",
                    "conclusion": "SUCCESSFUL"
                },
                "customData": [
                    {
                        "value": "TCF5",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ]
            }
        },

    event_EiffelTestCaseStartedEvent_3_1:
        {
            "links": [
                {
                    "target": "5ac05ae1-d7a2-4ef0-be0b-670ee4e8a8cf",
                    "type": "CONTEXT"
                },
                {
                    "target": "6acc3c87-75e0-4b6d-88f5-b1a5d4e62b43",
                    "type": "IUT"
                }
            ],
            "meta": {
                "id": "e06defd8-fcf0-4e08-bf32-43bbc06cf655",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875925918,
                "type": "EiffelTestCaseStartedEvent",
                "version": "1.0.0"
            },
            "data": {
                "testCase": {
                    "id": "TC6",
                    "uri": "https://other-tm.company.com/testCase/TC6",
                    "tracker": "My Other Test Management System"
                },
                "customData": [
                    {
                        "value": "TCS6",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ]
            }
        },


    event_EiffelTestCaseFinishedEvent_3_1:

        {
            "links": [
                {
                    "target": "e06defd8-fcf0-4e08-bf32-43bbc06cf655",
                    "type": "TEST_CASE_EXECUTION"
                }
            ],
            "meta": {
                "id": "17b20d3a-23a6-41c6-8da0-a87a240b4c2f",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875938919,
                "type": "EiffelTestCaseFinishedEvent",
                "version": "1.0.0"
            },
            "data": {
                "outcome": {
                    "verdict": "PASSED",
                    "conclusion": "SUCCESSFUL"
                },
                "customData": [
                    {
                        "value": "TCF6",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ]
            }
        },

    event_EiffelTestCaseFinishedEvent_3_2:
        {
            "links": [
                {
                    "target": "636a91e8-fb59-4863-a736-02a479f92816",
                    "type": "TEST_CASE_EXECUTION"
                }
            ],
            "meta": {
                "id": "2d2a3a27-9f87-4dd5-8953-1f9effebc1ec",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875943919,
                "type": "EiffelTestCaseFinishedEvent",
                "version": "1.0.0"
            },
            "data": {
                "outcome": {
                    "verdict": "PASSED",
                    "conclusion": "SUCCESSFUL"
                },
                "customData": [
                    {
                        "value": "TCF7",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ]
            }
        },

    event_EiffelConfidenceLevelModifiedEvent_3_1:
        {
            "links": [
                {
                    "target": "40df7fc4-0c40-40a3-a349-9f6da0ba81c5",
                    "type": "CAUSE"
                },
                {
                    "target": "fb6ef12d-25fb-4d77-b9fd-5fktsrefe66de47",
                    "type": "SUBJECT"
                }
            ],
            "meta": {
                "id": "f37d59a3-069e-4f4c-8cc5-a52e73501a75",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875944272,
                "type": "EiffelConfidenceLevelModifiedEvent",
                "version": "1.0.0"
            },
            "data": {
                "value": "SUCCESS",
                "customData": [
                    {
                        "value": "CLM2",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ],
                "name": "readyForSystemIntegration"
            }
        },

    event_EiffelCompositionDefinedEvent_3:
        {
            "links": [
                {
                    "target": "f37d59a3-069e-4f4c-8cc5-a52e73501a75",
                    "type": "CAUSE"
                },
                {
                    "target": "fb6efi4n-25fb-4d77-b9fd-5f2xrrefe66de47",
                    "type": "ELEMENT"
                }                               
            ],
            "meta": {
                "id": "fb6ef12d-25fb-4d77-b9fd-87688e66de47",
                "source": {
                    "domainId": "example.domain"
                },
                "time": 1481875944572,
                "type": "EiffelCompositionDefinedEvent",
                "version": "1.0.0"
            },
            "data": {
                "customData": [
                    {
                        "value": "CDef1",
                        "key": "name"
                    },
                    {
                        "value": 1,
                        "key": "iteration"
                    }
                ],
                "version": "1",
                "name": "Composition 1"
            }
        },


    event_EiffelArtifactCreatedEvent_1 :
        {
            "meta": {
                "time": 1473177136433,
                "source": {
                    "domainId": "example.domain"
                },
                "type": "EiffelArtifactCreatedEvent",               //<------ start event för EiffelConfidenceLevelModifiedEvent,
                "id": "ccce572c-c364-441e-abc9-b62fed080ca2",
                "version": "1.0.0"
            },
            "links": [
                {
                    "target": "23df3bd2-c620-42ce-80ba-b7ba6551c9f9",
                    "type": "COMPOSITION"
                },
                {
                    "target": "9ace5eea-3547-45f6-be4d-25b43d87e6dc",
                    "type": "ENVIRONMENT"
                },
                {
                    "target": "51601fdb-db7c-4b3f-862e-da1154e4ae96",
                    "type": "PREVIOUS_VERSION"
                },
                {
                    "target": "51c77087-74e2-449f-9def-00acd5e2c944",
                    "type": "CONTEXT"
                }
            ],
            "data": {
                "customData": [
                    {
                        "value": "ArtC2",
                        "key": "name"
                    },
                    {
                        "value": 53,
                        "key": "iteration"
                    }
                ],
                "fileInformation": [
                    {
                        "extension": "jar",
                        "classifier": "debug"
                    },
                    {
                        "extension": "",
                        "classifier": "test"
                    },
                    {
                        "extension": "exe",
                        "classifier": ""
                    }
                ],
                "gav": {
                    "version": "1.53.0",
                    "artifactId": "sub-system",
                    "groupId": "com.mycompany.myproduct"
                }
            }
        },


event_EiffelArtifactCreatedEvent_2 :
    {
        "meta": {
            "time": 1473177190242,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelArtifactCreatedEvent",
            "id": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "72fe056e-2768-41dd-a452-8a79ee58599b",
                "type": "COMPOSITION"
            },
            {
                "target": "ac4075f5-e020-4497-b4ea-16bd90e4f917",
                "type": "ENVIRONMENT"
            },
            {
                "target": "72fe056e-2768-41dd-a452-8a79ee58599b",
                "type": "CAUSE"
            },
            {
                "target": "39da3e43-848d-446c-919d-7a07a9c73592",
                "type": "PREVIOUS_VERSION"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "ArtC1",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "fileInformation": [
                {
                    "extension": "jar",
                    "classifier": ""
                }
            ],
            "gav": {
                "version": "1.53.0",
                "artifactId": "complete-system",
                "groupId": "com.mycompany.myproduct"
            }
        }
    },

event_EiffelArtifactPublishedEvent_1 :
    {
        "meta": {
            "time": 1473177166433,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelArtifactPublishedEvent",
            "id": "0d93f0ce-1eab-46d1-80e3-207393c899df",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "ccce572c-c364-441e-abc9-b62fed080ca2",
                "type": "ARTIFACT"
            },
            {
                "target": "51c77087-74e2-449f-9def-00acd5e2c944",
                "type": "CONTEXT"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "ArtP2",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "locations": [
                {
                    "uri": "https://myrepository.com/mySubSystemArtifact",
                    "type": "PLAIN"
                },
                {
                    "uri": "https://another.com",
                    "type": "ARTTIFACTORY"
                }
            ]
        }
    },


event_EiffelArtifactPublishedEvent_2 :
    {
        "meta": {
            "time": 1473177191242,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelArtifactPublishedEvent",
            "id": "0afddcbb-916f-412c-ad3f-77b699f3f720",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "ARTIFACT"
            },
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "CAUSE"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "ArtP1",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "locations": [
                {
                    "uri": "https://myrepository.com/myCompleteSystemArtifact",
                    "type": "PLAIN"
                }
            ]
        }
    },

event_EiffelConfidenceLevelModifiedEvent_1 :
    {
        "meta": {
            "time": 1473177188942,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelConfidenceLevelModifiedEvent",
            "id": "f463feef-afd2-4cf1-a42b-ce144eb97024",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "5a29664e-ab46-4df6-be0a-a70b8d3a714e",
                "type": "CAUSE"
            },
            {
                "target": "ccce572c-c364-441e-abc9-b62fed080ca2",
                "type": "SUBJECT"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "CLM2",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "name": "readyForSystemIntegration",
            "value": "SUCCESS"
        }
    },


event_EiffelConfidenceLevelModifiedEvent_2 :
    {
        "meta": {
            "time": 1473177479314,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelConfidenceLevelModifiedEvent",
            "id": "7aaee1be-1f1b-41a2-a1db-7481e9f31495",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "SUBJECT"
            },
            {
                "target": "b90fdd06-cce0-4ff2-a977-fa32857064c4",
                "type": "CAUSE"
            },
            {
                "target": "3dfc81b0-abf2-43d1-9c05-3089102a758a",
                "type": "CAUSE"
            },
            {
                "target": "1238ae3a-5332-4676-8cad-6eee56ab7269",
                "type": "CAUSE"
            },
            {
                "target": "c58faff7-c59d-42b1-a18f-49c942026a0c",
                "type": "CAUSE"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "CLM1",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "name": "readyForRelease",
            "value": "SUCCESS"
        }
    },


event_EiffelTestCaseStartedEvent_1 :
    {
        "meta": {
            "time": 1473177170586,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseStartedEvent",
            "id": "bcc98cef-707c-46be-ad89-392047f05a51",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "590b06d4-9950-4d4d-ad70-e7ee9f5ff8dd",
                "type": "CONTEXT"
            },
            {
                "target": "ccce572c-c364-441e-abc9-b62fed080ca2",  // <------------- ref EiffelArtifactCreatedEvent
                "type": "IUT"                                      // <-------------- från rules i template
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCS5",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ]
        }
    },


event_EiffelTestCaseStartedEvent_2 :
    {
        "meta": {
            "time": 1473177193294,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseStartedEvent",
            "id": "c9f503da-d332-4ce0-bf15-e5918b55f3cd",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "07cc929f-597f-4d4a-ac7a-d44badf20448",
                "type": "CONTEXT"
            },
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "IUT"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCS1",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ]
        }
    },


event_EiffelTestCaseStartedEvent_1_1 :
    {
        "meta": {
            "time": 1473177170588,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseStartedEvent",
            "id": "9ed792da-87c9-4eea-a4d6-9d3000fbc279",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "590b06d4-9950-4d4d-ad70-e7ee9f5ff8dd",
                "type": "CONTEXT"
            },
            {
                "target": "ccce572c-c364-441e-abc9-b62fed080ca2",   // <------------- ref EiffelArtifactCreatedEvent
                "type": "IUT"                                       // <-------------- från rules i template
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCS6",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ]
        }
    },


event_EiffelTestCaseStartedEvent_2_1 :
    {
        "meta": {
            "time": 1473177193394,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseStartedEvent",
            "id": "3ed2415e-1ac1-45cb-bac2-112db71b6324",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "07cc929f-597f-4d4a-ac7a-d44badf20448",
                "type": "CONTEXT"
            },
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "IUT"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCS2",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ]
        }
    },

event_EiffelTestCaseStartedEvent_2_2 :
    {

        "meta": {
            "time": 1473177346694,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseStartedEvent",
            "id": "347e63ff-b095-480a-b78d-ee4a68884d54",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "5348d5f1-3e1c-42b7-b366-0bc01beeca12",
                "type": "CONTEXT"
            },
            {
                "target": "b8daf9cd-660f-4efe-a2f1-52635f0e4bb7",
                "type": "IUT"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCS3",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ]
        }
    },


event_EiffelTestCaseFinishedEvent_1 :
    {
        "meta": {
            "time": 1473177180589,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseFinishedEvent",
            "id": "d7de0b67-fbc3-4581-93fd-c2454737d71d",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "bcc98cef-707c-46be-ad89-392047f05a51", // <-------------  EiffelTestCaseStartedEvent (event_obj_4)
                "type": "TEST_CASE_EXECUTION"                     // <-------------
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCF5",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "outcome": {
                "verdict": "PASSED"
            }
        }
    },



event_EiffelTestCaseFinishedEvent_1_1 :
    {
        "meta": {
            "time": 1473177183589,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseFinishedEvent",
            "id": "17d10fef-d85f-4d34-975d-f6aebda74d8c",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "9ed792da-87c9-4eea-a4d6-9d3000fbc279", // <-------------  EiffelTestCaseStartedEvent (event_obj_5)
                "type": "TEST_CASE_EXECUTION"                     // <-------------
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCF6",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "outcome": {
                "verdict": "PASSED"
            }
        }
    },


event_EiffelTestCaseFinishedEvent_2 :
    {
        "meta": {
            "time": 1473177246394,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseFinishedEvent",
            "id": "b90fdd06-cce0-4ff2-a977-fa32857064c4",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "c9f503da-d332-4ce0-bf15-e5918b55f3cd",
                "type": "TEST_CASE_EXECUTION"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCF1",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "outcome": {
                "verdict": "PASSED"
            }
        }
    },


event_EiffelTestCaseFinishedEvent_2_1 :
    {
        "meta": {
            "time": 1473177243394,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseFinishedEvent",
            "id": "3dfc81b0-abf2-43d1-9c05-3089102a758a",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "3ed2415e-1ac1-45cb-bac2-112db71b6324",
                "type": "TEST_CASE_EXECUTION"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCF2",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "outcome": {
                "verdict": "PASSED"
            }
        }
    },

event_EiffelTestCaseFinishedEvent_2_2 :
    {
        "meta": {
            "time": 1473177356694,
            "source": {
                "domainId": "example.domain"
            },
            "type": "EiffelTestCaseFinishedEvent",
            "id": "1238ae3a-5332-4676-8cad-6eee56ab7269",
            "version": "1.0.0"
        },
        "links": [
            {
                "target": "347e63ff-b095-480a-b78d-ee4a68884d54",
                "type": "TEST_CASE_EXECUTION"
            }
        ],
        "data": {
            "customData": [
                {
                    "value": "TCF3",
                    "key": "name"
                },
                {
                    "value": 53,
                    "key": "iteration"
                }
            ],
            "outcome": {
                "verdict": "PASSED"
            }
        }
    }
// /stop -- event_objects
};


