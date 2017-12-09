test_characters = [
    "mario",
    "luigi",
    "peach",
    "mewtwo"
]
characters = {
    "Bowser": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,3],
            "speed":[0,2],
            "flexibility":[0,1],
            "range":[3,4],
            "recovery":[2,3]
        },
        "comments":[]
    },
    "Bowser Jr.": {
        "favorite": false,
        "ratings": {
            "power":[0,3.4],
            "defense":[0,2.5],
            "speed":[0,1.3],
            "flexibility":[0,3.7],
            "range":[3,4],
            "recovery":[4,3]
        },
        "comments":[]
    },
    "Mario": {
        "favorite": false,
        "ratings": {
            "power":[3,3.5],
            "defense":[0,2.5],
            "speed":[0,1.5],
            "flexibility":[1.5,3],
            "range":[3,3],
            "recovery":[3,4]
        },
        "comments": [
            {
                "user":"Kirito01",
                "text":"His side special is fun for trolling n00bs cuz it turns them around."
            }
        ]
    }
}

const chars2 = {
    Bowser: {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Bowser Jr.": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Captain Falcon": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Charizard": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Dark Pitt": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Diddy Kong": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Dog-hunt": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Donkey Kong": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Dr. Mario": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Falco": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Fox": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Ganondorf": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Greninja": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Ike": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Jigglypuff": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "King Dedede": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Kirby": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Link": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Little Mac": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Lucario": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.3],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Lucas": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Lucina": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Luigi": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Mario": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments": [
            {
                "user":"Kirito01",
                "text":"His side special is fun for trolling n00bs cuz it turns them around."
            }
        ]
    },
    "Marth": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Megaman": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Metaknight": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Mewtwo": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Mii": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Mr. Game and Watch": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Ness": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Olimar": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Pacman": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Palutena": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Peach": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Pikachu": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Pitt": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Rob": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Robin": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Rosalina": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Roy": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Ryu": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Samus": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Sheik": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Shulk": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Sonic": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Toon Link": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Villager": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Wario": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Wii-fit trainer": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Yoshi": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Zelda": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    },
    "Zero-suit Samus": {
        "favorite":false,
        "ratings": {
            "power":[0,4],
            "defense":[0,1.5],
            "speed":[0,2.5],
            "flexibility":[0,1],
            "range":[0,1.2],
            "recovery":[0,3.2]
        },
        "comments":[]
    }
}