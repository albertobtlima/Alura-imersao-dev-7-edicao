var listaFilmes = [
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg", 
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg", 
    "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/90/67/52/20107757.jpg", 
    "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

/* listaFilmes[0] = "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg";
listaFilmes[1] = "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg";
listaFilmes[2] = "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"; */


for (var i=0; i < listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
}
