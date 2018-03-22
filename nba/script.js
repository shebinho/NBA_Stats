function setup(){
    loadJSON("https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2017-18&SeasonType=Regular+Season&StatCategory=PTS",gotData,"jsonp")
}

function gotData(data){
    console.log(data);
}