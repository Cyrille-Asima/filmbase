const Film = require ('../models/film.model')

module.exports = {
    getAllFilms:(req,res)=>{
        Film.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getOneFilm:(req,res)=>{
        Film.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    
    addFilm:(req,res)=>{
        Film.create(req.body)
        .then((result)=>{
            res.json({result})
        }).catch((err)=>{
            res.status(400).json({err})
        })
    },
    
    updateFilm: (req,res) => {
        Film.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
            })
            .then((updatedFilm) => {
                res.json({ updatedFilm});
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
        },
    
    deleteFilm:(req,res)=>{
        Film.deleteOne({ _id: req.params.id })
        .then((deletedId) => {
            res.json({ deletedId });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    },

    getComedy:(req,res)=>{
        Film.find({ genre: "Comedy"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getDrama:(req,res)=>{
        Film.find({ genre: "Drama"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getHorror:(req,res)=>{
        Film.find({ genre: "Horror"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getSci_fi:(req,res)=>{
        Film.find({ genre: "Sci-Fi"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getAction:(req,res)=>{
        Film.find({ genre: "Action"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getFamily:(req,res)=>{
        Film.find({ genre: "Family"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getDocumentary:(req,res)=>{
        Film.find({ genre: "Documentary"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getRomcom:(req,res)=>{
        Film.find({ genre: "Romcom"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getSilent_Movie:(req,res)=>{
        Film.find({ genre: "Silent Movie"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getThriller:(req,res)=>{
        Film.find({ genre: "Thriller"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getCrime_Noir:(req,res)=>{
        Film.find({ genre: "Crime Noir"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getFrench_Cinema:(req,res)=>{
        Film.find({ genre: "French Cinema"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getHorror_Comedy:(req,res)=>{
        Film.find({ genre: "Horror/Comedy"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    
    getKung_fu:(req,res)=>{
        Film.find({ genre: "Kung-fu"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

    getBollywood:(req,res)=>{
        Film.find({ genre: "Bollywood"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },
    
    getAnime:(req,res)=>{
        Film.find({ genre: "Anime"})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.status(400).json(err)
        })
    },

}
