exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city has something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.cityName;
    var title,heading;
    var imageCount=4;

     switch (cityName) {
            case "berlin":
                title = "Berlin";
                headline = "Berlin is the place for tourists";
                break;
            case "paris":
                title = "Paris";
                headline = "I love Eiffel Tower, France";
                break;
            case "london":
                title = "London";
                headline = "London Eye is the place to be";
                break;
            case "newyork":
                title = "New York";
                headline = "New York all set for elections";
                break;
            case "madrid":
                title = "Madrid";
                headline = "Real Madrid lost to Barcelona in UCL final";
                break;
            default:
                res.status(404).send("City not Found");
                return;
        }

    res.render('city',{
        title:title,
        headline:headline,
        city:cityName,
        numberOfImages:imageCount});
  }
