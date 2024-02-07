var listaFilmes = [
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg", 
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg", 
    "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/90/67/52/20107757.jpg", 
    "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

listaFilmes.forEach(function(filme) {
    document.write("<img src=" + filme + ">");
});
