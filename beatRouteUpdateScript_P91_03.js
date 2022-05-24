use beat
db.getCollection('beat_track').find({}).forEach(function(doc){
              var crtd_dt = doc.crtd_dt;
              var day = crtd_dt.getDate();
              var month = crtd_dt.getMonth()+1;
    if(day < 10)
	day = 0+""+day;
    if(month < 10)
	month = 0+""+month;
    db.beat_track.update({_id:doc._id}  , {$set : {track_dt_num : NumberLong(crtd_dt.getFullYear()+ ""+ month+""+day) }} )
    })