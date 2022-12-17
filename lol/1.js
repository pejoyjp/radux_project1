const getChampions = async()=>
    await (await fetch('http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json')).json()


getChampions().then(value => console.log(value))