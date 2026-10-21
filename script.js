// Master List in exact order as requested
const yokaiMasterList = [
    { id: 1, name: "Mochimacho", rarity: "Común", image: "mochimacho.png", tribe: "Valiente", rank: "D", series: 1 },
    { id: 2, name: "Machimio", rarity: "Común", image: "machimio.png", tribe: "Valiente", rank: "D", series: 1 },
    { id: 3, name: "Yelmandante", rarity: "Común", image: "yelmandante.png", tribe: "Valiente", rank: "D", series: 1 },
    { id: 4, name: "Juntollero", rarity: "Poco común", image: "juntollero.png", tribe: "Valiente", rank: "A", series: 1 },
    { id: 5, name: "Genedaver", rarity: "Inusual", image: "genedaver.png", tribe: "Valiente", rank: "S", series: 1 },
    { id: 6, name: "Cotilleja", rarity: "Común", image: "cotilleja.png", tribe: "Misterioso", rank: "D", series: 1 },
    { id: 7, name: "Marulleja", rarity: "Poco común", image: "marulleja.png", tribe: "Misterioso", rank: "B", series: 1 },
    { id: 8, name: "Esquelleja", rarity: "Inusual", image: "esquelleja.png", tribe: "Misterioso", rank: "B", series: 1 },
    { id: 9, name: "Telespejo", rarity: "Común", image: "telespejo.png", tribe: "Misterioso", rank: "C", series: 1 },
    { id: 10, name: "Malpejismo", rarity: "Poco común", image: "malpejismo.png", tribe: "Misterioso", rank: "A", series: 1 },
    { id: 11, name: "Castelius III", rarity: "Común", image: "casteliusIII.png", tribe: "Robusto", rank: "C", series: 1 },
    { id: 12, name: "Castelius II", rarity: "Poco común", image: "casteliusII.png", tribe: "Robusto", rank: "B", series: 1 },
    { id: 13, name: "Castelius I", rarity: "Poco común", image: "casteliusI.png", tribe: "Robusto", rank: "A", series: 1 },
    { id: 14, name: "Globqueo", rarity: "Común", image: "globqueo.png", tribe: "Robusto", rank: "D", series: 1 },
    { id: 15, name: "Globtundente", rarity: "Común", image: "globtundente.png", tribe: "Robusto", rank: "D", series: 1 },
    { id: 16, name: "Jibanyan", rarity: "Común", image: "jibanyan.png", tribe: "Guapo", rank: "D", series: 1 },
    { id: 17, name: "Espinyan", rarity: "Poco común", image: "espinyan.png", tribe: "Guapo", rank: "B", series: 1 },
    { id: 18, name: "Pelochnyan", rarity: "Poco común", image: "pelochnyan.png", tribe: "Guapo", rank: "B", series: 1 },
    { id: 19, name: "Escanlofrio", rarity: "Común", image: "escanlofrio.png", tribe: "Guapo", rank: "E", series: 1 },
    { id: 20, name: "Frihuahua", rarity: "Inusual", image: "frihuahua.png", tribe: "Guapo", rank: "S", series: 1 },
    { id: 21, name: "Lavadenco", rarity: "Inusual", image: "lavadenco.png", tribe: "Guapo", rank: "S", series: 1 },
    { id: 22, name: "Felisonte", rarity: "Común", image: "felisonte.png", tribe: "Amable", rank: "C", series: 1 },
    { id: 23, name: "Reversa", rarity: "Poco común", image: "reversa.png", tribe: "Amable", rank: "A", series: 1 },
    { id: 24, name: "Reversada", rarity: "Inusual", image: "reversada.png", tribe: "Amable", rank: "A", series: 1 },
    { id: 25, name: "Bolilete", rarity: "Poco común", image: "bolilete.png", tribe: "Amable", rank: "A", series: 1 },
    { id: 26, name: "Doblilete", rarity: "Poco común", image: "doblilete.png", tribe: "Amable", rank: "A", series: 1 },
    { id: 27, name: "Noguio", rarity: "Común", image: "noguio.png", tribe: "Oscuro", rank: "E", series: 1 },
    { id: 28, name: "Topami", rarity: "Común", image: "topami.png", tribe: "Oscuro", rank: "D", series: 1 },
    { id: 29, name: "Encielago", rarity: "Común", image: "encielago.png", tribe: "Oscuro", rank: "D", series: 1 },
    { id: 30, name: "Caserielago", rarity: "Poco común", image: "caserielago.png", tribe: "Oscuro", rank: "A", series: 1 },
    { id: 31, name: "Ermicielago", rarity: "Inusual", image: "ermicielago.png", tribe: "Oscuro", rank: "A", series: 1 },
    { id: 32, name: "Negatalia", rarity: "Común", image: "negatalia.png", tribe: "Siniestro", rank: "D", series: 1 },
    { id: 33, name: "Draqui", rarity: "Común", image: "draqui.png", tribe: "Escurridizo", rank: "D", series: 1 },
    { id: 34, name: "Lord Dragon", rarity: "Inusual", image: "lorddragon.png", tribe: "Escurridizo", rank: "S", series: 1 },
    { id: 35, name: "Dragon Azur", rarity: "Inusual", image: "dragonazur.png", tribe: "Escurridizo", rank: "S", series: 1 },
    { id: 36, name: "Charlatón", rarity: "Común", image: "charlaton.png", tribe: "Escurridizo", rank: "C", series: 1 },
    { id: 37, name: "Tochaplátano", rarity: "Inusual", image: "tochaplatano.png", tribe: "Escurridizo", rank: "A", series: 1 },
    { id: 38, name: "Shogunyan", rarity: "Legendario", image: "shogunyan.png", tribe: "Valiente", rank: "S", series: 1 },
    { id: 39, name: "Zafinyan", rarity: "Especial", image: "zafinyan.png", tribe: "Guapo", rank: "A", series: 1 },
    { id: 40, name: "Flamileon", rarity: "Común", image: "flamileon.png", tribe: "Valiente", rank: "C", series: 2 },
    { id: 41, name: "Temboleon", rarity: "Poco común", image: "temboleon.png", tribe: "Valiente", rank: "B", series: 2 },
    { id: 42, name: "Sirleon", rarity: "Inusual", image: "sirleon.png", tribe: "Valiente", rank: "A", series: 2 },
    { id: 43, name: "Ludorai", rarity: "Común", image: "ludorai.png", tribe: "Valiente", rank: "C", series: 2 },
    { id: 44, name: "Lustre", rarity: "Poco común", image: "lustre.png", tribe: "Valiente", rank: "A", series: 2 },
    { id: 45, name: "Furtre", rarity: "Poco común", image: "furtre.png", tribe: "Valiente", rank: "A", series: 2 },
    { id: 46, name: "Dortre", rarity: "Inusual", image: "dortre.png", tribe: "Valiente", rank: "S", series: 2 },
    { id: 47, name: "Cupistolo", rarity: "Común", image: "cupistolo.png", tribe: "Misterioso", rank: "C", series: 2 },
    { id: 48, name: "Casanovo", rarity: "Poco común", image: "casanovo.png", tribe: "Misterioso", rank: "A", series: 2 },
    { id: 49, name: "Casanono", rarity: "Poco común", image: "casanono.png", tribe: "Misterioso", rank: "A", series: 2 },
    { id: 50, name: "Kyubi", rarity: "Inusual", image: "kyubi.png", tribe: "Misterioso", rank: "S", series: 2 },
    { id: 51, name: "Iluho", rarity: "Común", image: "iluho.png", tribe: "Misterioso", rank: "C", series: 2 },
    { id: 52, name: "Eluho", rarity: "Común", image: "eluho.png", tribe: "Misterioso", rank: "C", series: 2 },
    { id: 53, name: "Ubiho", rarity: "Poco común", image: "ubiuho.png", tribe: "Misterioso", rank: "B", series: 2 },
    { id: 54, name: "Montaña Loca", rarity: "Común", image: "montañaloca.png", tribe: "Robusto", rank: "C", series: 2 },
    { id: 55, name: "Lord Lava", rarity: "Poco común", image: "lordlava.png", tribe: "Robusto", rank: "B", series: 2 },
    { id: 56, name: "Nihablar", rarity: "Común", image: "nihablar.png", tribe: "Robusto", rank: "E", series: 2 },
    { id: 57, name: "Impas", rarity: "Poco común", image: "impas.png", tribe: "Robusto", rank: "A", series: 2 },
    { id: 58, name: "Murallin", rarity: "Inusual", image: "murallin.png", tribe: "Robusto", rank: "A", series: 2 },
    { id: 59, name: "Komasan", rarity: "Común", image: "komasan.png", tribe: "Guapo", rank: "D", series: 2 },
    { id: 60, name: "Komaleon", rarity: "Poco común", image: "komaleon.png", tribe: "Guapo", rank: "A", series: 2 },
    { id: 61, name: "Komajiro", rarity: "Común", image: "komajiro.png", tribe: "Guapo", rank: "D", series: 2 },
    { id: 62, name: "Komatigrado", rarity: "Poco común", image: "komatigrado.png", tribe: "Guapo", rank: "A", series: 2 },
    { id: 63, name: "Cimbron", rarity: "Común", image: "cimbron.png", tribe: "Amable", rank: "E", series: 2 },
    { id: 64, name: "Pasodon", rarity: "Común", image: "pasodon.png", tribe: "Amable", rank: "E", series: 2 },
    { id: 65, name: "Ritma", rarity: "Común", image: "ritma.png", tribe: "Amable", rank: "D", series: 2 },
    { id: 66, name: "Papa Rayo", rarity: "Poco común", image: "paparayo.png", tribe: "Amable", rank: "A", series: 2 },
    { id: 67, name: "Tio Infinito", rarity: "Inusual", image: "tioinfinito.png", tribe: "Amable", rank: "S", series: 2 },
    { id: 68, name: "Algio", rarity: "Común", image: "algio.png", tribe: "Oscuro", rank: "E", series: 2 },
    { id: 69, name: "Agujeto", rarity: "Poco común", image: "agujeto.png", tribe: "Oscuro", rank: "C", series: 2 },
    { id: 70, name: "Machaka", rarity: "Inusual", image: "machaka.png", tribe: "Oscuro", rank: "B", series: 2 },
    { id: 71, name: "Suspicioni", rarity: "Común", image: "suspicioni.png", tribe: "Oscuro", rank: "D", series: 2 },
    { id: 72, name: "Pataletoni", rarity: "Común", image: "pataletoni.png", tribe: "Oscuro", rank: "D", series: 2 },
    { id: 73, name: "Contrarioni", rarity: "Poco común", image: "contrarioni.png", tribe: "Oscuro", rank: "B", series: 2 },
    { id: 74, name: "Ejemtos", rarity: "Común", image: "ejemtos.png", tribe: "Siniestro", rank: "E", series: 2 },
    { id: 75, name: "Erizlor", rarity: "Común", image: "erizlor.png", tribe: "Siniestro", rank: "D", series: 2 },
    { id: 76, name: "Pezqueroso", rarity: "Común", image: "pezqueroso.png", tribe: "Escurridizo", rank: "D", series: 2 },
    { id: 77, name: "Pezgativo", rarity: "Poco común", image: "pezgativo.png", tribe: "Escurridizo", rank: "B", series: 2 },
    { id: 78, name: "Pezquiciado", rarity: "Inusual", image: "pezquiciado.png", tribe: "Escurridizo", rank: "A", series: 2 },
    { id: 79, name: "Mandícoro", rarity: "Poco común", image: "mandicoro.png", tribe: "Escurridizo", rank: "B", series: 2 },
    { id: 80, name: "Ciniserpe", rarity: "Poco común", image: "ciniserpe.png", tribe: "Escurridizo", rank: "B", series: 2 },
    { id: 81, name: "Arfidio", rarity: "Poco común", image: "arfidio.png", tribe: "Escurridizo", rank: "A", series: 2 },
    { id: 82, name: "Komashura", rarity: "Legendario", image: "komashura.png", tribe: "Misterioso", rank: "S", series: 2 },
    { id: 83, name: "Esmenyan", rarity: "Especial", image: "esmenyan.png", tribe: "Guapo", rank: "A", series: 2 },
    // Serie 3: Aura siniestra
    { id: 84, name: "Alcaldero", rarity: "Común", image: "alcaldero.png", tribe: "Valiente", rank: "E", series: 3 },
    { id: 85, name: "Sinna", rarity: "Poco común", image: "sinna.png", tribe: "Valiente", rank: "C", series: 3 },
    { id: 86, name: "Sinnareno", rarity: "Inusual", image: "sinnareno.png", tribe: "Valiente", rank: "B", series: 3 },
    { id: 87, name: "Benkei", rarity: "Poco común", image: "benkei.png", tribe: "Valiente", rank: "B", series: 3 },
    { id: 88, name: "B3-NK1", rarity: "Poco común", image: "b3-nk1.png", tribe: "Valiente", rank: "B", series: 3 },
    { id: 89, name: "Mokopavo", rarity: "Común", image: "mokopavo.png", tribe: "Misterioso", rank: "E", series: 3 },
    { id: 90, name: "Pachus", rarity: "Común", image: "pachus.png", tribe: "Misterioso", rank: "D", series: 3 },
    { id: 91, name: "Algazara", rarity: "Común", image: "algazara.png", tribe: "Misterioso", rank: "D", series: 3 },
    { id: 92, name: "Labizula", rarity: "Común", image: "labizula.png", tribe: "Misterioso", rank: "C", series: 3 },
    { id: 93, name: "Trilepata", rarity: "Poco común", image: "trilepata.png", tribe: "Misterioso", rank: "B", series: 3 },
    { id: 94, name: "Tetrariosa", rarity: "Poco común", image: "tetrariosa.png", tribe: "Misterioso", rank: "B", series: 3 },
    { id: 95, name: "Tentelento", rarity: "Común", image: "tentelento.png", tribe: "Robusto", rank: "E", series: 3 },
    { id: 96, name: "Tentemacho", rarity: "Poco común", image: "tentemacho.png", tribe: "Robusto", rank: "B", series: 3 },
    { id: 97, name: "Tenterila", rarity: "Poco común", image: "tenterila.png", tribe: "Robusto", rank: "B", series: 3 },
    { id: 98, name: "Rebelcebu", rarity: "Común", image: "rebelcebu.png", tribe: "Robusto", rank: "E", series: 3 },
    { id: 99, name: "Caporrista", rarity: "Poco común", image: "caporrista.png", tribe: "Robusto", rank: "B", series: 3 },
    { id: 100, name: "Hermanion", rarity: "Inusual", image: "hermanion.png", tribe: "Robusto", rank: "A", series: 3 },
    { id: 101, name: "Deslumbrella", rarity: "Común", image: "deslumbrella.png", tribe: "Guapo", rank: "E", series: 3 },
    { id: 102, name: "Rechinella", rarity: "Poco común", image: "rechinella.png", tribe: "Guapo", rank: "C", series: 3 },
    { id: 103, name: "Esquelebella", rarity: "Inusual", image: "esquelebella.png", tribe: "Guapo", rank: "B", series: 3 },
    { id: 104, name: "Kappandante", rarity: "Común", image: "kappandante.png", tribe: "Guapo", rank: "D", series: 3 },
    { id: 105, name: "Kappadachin", rarity: "Poco común", image: "kappadachin.png", tribe: "Guapo", rank: "A", series: 3 },
    { id: 106, name: "Kapparfista", rarity: "Inusual", image: "kapparfista.png", tribe: "Guapo", rank: "A", series: 3 },
    { id: 107, name: "Kieroto", rarity: "Común", image: "kieroto.png", tribe: "Amable", rank: "E", series: 3 },
    { id: 108, name: "Zampo", rarity: "Común", image: "zampo.png", tribe: "Amable", rank: "D", series: 3 },
    { id: 109, name: "Nomeda", rarity: "Común", image: "nomeda.png", tribe: "Amable", rank: "D", series: 3 },
    { id: 110, name: "Opti", rarity: "Común", image: "opti.png", tribe: "Amable", rank: "C", series: 3 },
    { id: 111, name: "Negatisquito", rarity: "Común", image: "negatisquito.png", tribe: "Oscuro", rank: "E", series: 3 },
    { id: 112, name: "Deprisquito", rarity: "Poco común", image: "deprisquito.png", tribe: "Oscuro", rank: "C", series: 3 },
    { id: 113, name: "Picorron", rarity: "Inusual", image: "picorron.png", tribe: "Oscuro", rank: "A", series: 3 },
    { id: 114, name: "Tengulecto", rarity: "Común", image: "tengulecto.png", tribe: "Oscuro", rank: "C", series: 3 },
    { id: 115, name: "Tengullon", rarity: "Poco común", image: "tengullon.png", tribe: "Oscuro", rank: "B", series: 3 },
    { id: 116, name: "Cantonio", rarity: "Común", image: "cantonio.png", tribe: "Siniestro", rank: "E", series: 3 },
    { id: 117, name: "Multiniche", rarity: "Poco común", image: "multiniche.png", tribe: "Siniestro", rank: "B", series: 3 },
    { id: 118, name: "Ser Bero", rarity: "Inusual", image: "serbero.png", tribe: "Siniestro", rank: "A", series: 3 },
    { id: 119, name: "Insomnia", rarity: "Inusual", image: "insomnia.png", tribe: "Siniestro", rank: "S", series: 3 },
    { id: 120, name: "Morfea", rarity: "Inusual", image: "morfea.png", tribe: "Siniestro", rank: "S", series: 3 },
    { id: 121, name: "Cuesco", rarity: "Común", image: "cuesco.png", tribe: "Siniestro", rank: "C", series: 3 },
    { id: 122, name: "Peditum", rarity: "Poco común", image: "peditum.png", tribe: "Siniestro", rank: "A", series: 3 },
    { id: 123, name: "Ayay", rarity: "Común", image: "ayay.png", tribe: "Siniestro", rank: "E", series: 3 },
    { id: 124, name: "Horterraro", rarity: "Común", image: "horterraro.png", tribe: "Siniestro", rank: "C", series: 3 },
    { id: 125, name: "Alarcion", rarity: "Inusual", image: "alarcion.png", tribe: "Siniestro", rank: "A", series: 3 },
    { id: 126, name: "Goto", rarity: "Común", image: "goto.png", tribe: "Siniestro", rank: "E", series: 3 },
    { id: 127, name: "Sirimiri", rarity: "Poco común", image: "sirimiri.png", tribe: "Siniestro", rank: "B", series: 3 },
    { id: 128, name: "Copo", rarity: "Común", image: "copo.png", tribe: "Siniestro", rank: "E", series: 3 },
    { id: 129, name: "Ventisquero", rarity: "Poco común", image: "ventisquero.png", tribe: "Siniestro", rank: "B", series: 3 },
    { id: 130, name: "Coagulon", rarity: "Inusual", image: "coagulon.png", tribe: "Siniestro", rank: "D", series: 3 },
    { id: 131, name: "Graciosno", rarity: "Poco común", image: "graciosno.png", tribe: "Siniestro", rank: "A", series: 3 },
    { id: 132, name: "Hilarion", rarity: "Poco común", image: "hilarion.png", tribe: "Siniestro", rank: "A", series: 3 },
    { id: 133, name: "Arruñona", rarity: "Poco común", image: "arruñona.png", tribe: "Siniestro", rank: "B", series: 3 },
    { id: 134, name: "Belladona", rarity: "Inusual", image: "belladona.png", tribe: "Siniestro", rank: "S", series: 3 },
    { id: 135, name: "Reboca", rarity: "Común", image: "reboca.png", tribe: "Siniestro", rank: "D", series: 3 },
    { id: 136, name: "Pillicajosa", rarity: "Común", image: "pillicajosa.png", tribe: "Siniestro", rank: "C", series: 3 },
    { id: 137, name: "Ido", rarity: "Común", image: "ido.png", tribe: "Escurridizo", rank: "C", series: 3 },
    { id: 138, name: "Turdido", rarity: "Poco común", image: "turdido.png", tribe: "Escurridizo", rank: "B", series: 3 },
    { id: 139, name: "Pelluron", rarity: "Común", image: "pelluron.png", tribe: "Escurridizo", rank: "C", series: 3 },
    { id: 140, name: "Pringuron", rarity: "Poco común", image: "pringuron.png", tribe: "Escurridizo", rank: "B", series: 3 },
    { id: 141, name: "Dandiniche", rarity: "Legendario", image: "dandiniche.png", tribe: "Siniestro", rank: "S", series: 3 },
    { id: 142, name: "Rubinyan", rarity: "Especial", image: "rubinyan.png", tribe: "Guapo", rank: "A", series: 3 },
    // Serie 4: Cerezos florecientes
    { id: 143, name: "Katano", rarity: "Común", image: "katano.png", tribe: "Valiente", rank: "E", series: 4 },
    { id: 144, name: "Katananai", rarity: "Poco común", image: "katananai.png", tribe: "Valiente", rank: "C", series: 4 },
    { id: 145, name: "Katakroken", rarity: "Inusual", image: "katakroken.png", tribe: "Valiente", rank: "B", series: 4 },
    { id: 146, name: "Sushiyama", rarity: "Poco común", image: "sushiyama.png", tribe: "Valiente", rank: "B", series: 4 },
    { id: 147, name: "Kapunki", rarity: "Inusual", image: "kapunki.png", tribe: "Valiente", rank: "A", series: 4 },
    { id: 148, name: "Komemo", rarity: "Común", image: "komemo.png", tribe: "Misterioso", rank: "E", series: 4 },
    { id: 149, name: "Tontolin", rarity: "Común", image: "tontolin.png", tribe: "Misterioso", rank: "E", series: 4 },
    { id: 150, name: "Ondívoro", rarity: "Común", image: "ondivoro.png", tribe: "Misterioso", rank: "D", series: 4 },
    { id: 151, name: "Coberturo", rarity: "Poco común", image: "coberturo.png", tribe: "Misterioso", rank: "A", series: 4 },
    { id: 152, name: "Estatinarca", rarity: "Inusual", image: "estatinarca.png", tribe: "Misterioso", rank: "S", series: 4 },
    { id: 153, name: "Pom", rarity: "Inusual", image: "pom.png", tribe: "Robusto", rank: "S", series: 4 },
    { id: 154, name: "Flus", rarity: "Inusual", image: "flus.png", tribe: "Robusto", rank: "S", series: 4 },
    { id: 155, name: "Lorigón", rarity: "Común", image: "lorigon.png", tribe: "Robusto", rank: "D", series: 4 },
    { id: 156, name: "Maxicastelius", rarity: "Inusual", image: "maxicastelius.png", tribe: "Robusto", rank: "S", series: 4 },
    { id: 157, name: "Pegarabajo", rarity: "Poco común", image: "pegarabajo.png", tribe: "Robusto", rank: "B", series: 4 },
    { id: 158, name: "Enormarabajo", rarity: "Inusual", image: "enormarabajo.png", tribe: "Robusto", rank: "S", series: 4 },
    { id: 159, name: "Cuernarabajo", rarity: "Inusual", image: "cuernarabajo.png", tribe: "Robusto", rank: "S", series: 4 },
    { id: 160, name: "Ningarra", rarity: "Común", image: "ningarra.png", tribe: "Guapo", rank: "E", series: 4 },
    { id: 161, name: "Habilgarra", rarity: "Poco común", image: "habilgarra.png", tribe: "Guapo", rank: "C", series: 4 },
    { id: 162, name: "Cantigarra", rarity: "Inusual", image: "cantigarra.png", tribe: "Guapo", rank: "B", series: 4 },
    { id: 163, name: "Baku", rarity: "Común", image: "baku.png", tribe: "Guapo", rank: "D", series: 4 },
    { id: 164, name: "Blanpir", rarity: "Poco común", image: "blanpir.png", tribe: "Guapo", rank: "C", series: 4 },
    { id: 165, name: "Abuzampa", rarity: "Común", image: "abuzampa.png", tribe: "Amable", rank: "E", series: 4 },
    { id: 166, name: "Gargazampa", rarity: "Poco común", image: "gargazampa.png", tribe: "Amable", rank: "B", series: 4 },
    { id: 167, name: "Aburroz", rarity: "Inusual", image: "aburroz.png", tribe: "Amable", rank: "B", series: 4 },
    { id: 168, name: "Enerposa", rarity: "Común", image: "enerposa.png", tribe: "Amable", rank: "D", series: 4 },
    { id: 169, name: "Eneposa", rarity: "Común", image: "eneposa.png", tribe: "Amable", rank: "D", series: 4 },
    { id: 170, name: "Mejorposa", rarity: "Poco común", image: "mejorposa.png", tribe: "Amable", rank: "A", series: 4 },
    { id: 171, name: "Vivariposa", rarity: "Inusual", image: "vivariposa.png", tribe: "Amable", rank: "S", series: 4 },
    { id: 172, name: "Negasus", rarity: "Poco común", image: "negasus.png", tribe: "Oscuro", rank: "A", series: 4 },
    { id: 173, name: "Pifiasus", rarity: "Inusual", image: "pifiasus.png", tribe: "Oscuro", rank: "A", series: 4 },
    { id: 174, name: "Timidiablo", rarity: "Poco común", image: "timidiablo.png", tribe: "Oscuro", rank: "A", series: 4 },
    { id: 175, name: "Osademonio", rarity: "Inusual", image: "osademonio.png", tribe: "Oscuro", rank: "S", series: 4 },
    { id: 176, name: "Avarqueroso", rarity: "Inusual", image: "avarqueroso.png", tribe: "Oscuro", rank: "S", series: 4 },
    { id: 177, name: "Diables", rarity: "Inusual", image: "diables.png", tribe: "Oscuro", rank: "S", series: 4 },
    { id: 178, name: "Cartepollo", rarity: "Común", image: "cartepollo.png", tribe: "Siniestro", rank: "E", series: 4 },
    { id: 179, name: "Rafaz", rarity: "Común", image: "rafaz.png", tribe: "Siniestro", rank: "D", series: 4 },
    { id: 180, name: "Noko", rarity: "Común", image: "noko.png", tribe: "Escurridizo", rank: "E", series: 4 },
    { id: 181, name: "Florinoko", rarity: "Poco común", image: "florinoko.png", tribe: "Escurridizo", rank: "A", series: 4 },
    { id: 182, name: "Pandanoko", rarity: "Inusual", image: "pandanoko.png", tribe: "Escurridizo", rank: "A", series: 4 },
    { id: 183, name: "Anjijila", rarity: "Común", image: "anjijila.png", tribe: "Escurridizo", rank: "D", series: 4 },
    { id: 184, name: "Tenogrio", rarity: "Poco común", image: "tenogrio.png", tribe: "Escurridizo", rank: "C", series: 4 },
    { id: 185, name: "Urnaconda", rarity: "Poco común", image: "urnaconda.png", tribe: "Escurridizo", rank: "C", series: 4 },
    { id: 186, name: "Abuflorido", rarity: "Legendario", image: "abuflorido.png", tribe: "Amable", rank: "S", series: 4 },
    { id: 187, name: "Topanyan", rarity: "Especial", image: "topanyan.png", tribe: "Guapo", rank: "A", series: 4 }
];

// Probabilities (out of 100)
const rarities = [
    { name: "Común", chance: 60 },
    { name: "Poco común", chance: 30 },
    { name: "Inusual", chance: 9 },
    { name: "Legendario", chance: 1 }
];

// Minigame Constants
const tribeAdvantages = {
    "Valiente": "Misterioso",
    "Misterioso": "Robusto",
    "Robusto": "Guapo",
    "Guapo": "Amable",
    "Amable": "Oscuro",
    "Oscuro": "Siniestro",
    "Siniestro": "Escurridizo",
    "Escurridizo": "Valiente"
};

const rankValues = { "S": 6, "A": 5, "B": 4, "C": 3, "D": 2, "E": 1 };

// Inventory & Stats state
let userInventory = {};
let stats = {
    "Común": 0,
    "Poco común": 0,
    "Inusual": 0,
    "Legendario": 0,
    "Especial": 0
};
let yoCoins = 0;
let tokenFragments = 0;
let tokens = 0;

// DOM Elements
const blindBag = document.getElementById('blindBag');
const packContainer = document.getElementById('packContainer');
const resultsContainer = document.getElementById('resultsContainer');
const medalsGrid = document.getElementById('medalsGrid');
const actionButtons = document.getElementById('actionButtons');
const openAnotherBtn = document.getElementById('openAnotherBtn');
const resetCollectionBtn = document.getElementById('resetCollectionBtn');
const medalliumGrid = document.getElementById('medalliumGrid');
const medalliumProgress = document.getElementById('medallium-progress');
const medalliumPageLabel = document.getElementById('medallium-page-label');
const medalliumPrevPage = document.getElementById('medallium-prev-page');
const medalliumNextPage = document.getElementById('medallium-next-page');

// Minigame DOM Elements
const minigameYokaiList = document.getElementById('minigame-yokai-list');
const selectedCountEl = document.getElementById('selected-count');
const startBattleBtn = document.getElementById('start-battle-btn');
const minigameSelection = document.getElementById('minigame-selection');
const minigameBattle = document.getElementById('minigame-battle');
const minigameResults = document.getElementById('minigame-results');
const playerHandGrid = document.getElementById('player-hand-grid');
const playerSlot = document.getElementById('player-slot');
const aiSlot = document.getElementById('ai-slot');
const playerScoreEl = document.getElementById('player-score');
const aiScoreEl = document.getElementById('ai-score');
const battleMessage = document.getElementById('battle-message');
const restartGameBtn = document.getElementById('restart-game-btn');
const finalResultTitle = document.getElementById('final-result-title');
const finalPlayerScoreEl = document.getElementById('final-player-score');
const finalAiScoreEl = document.getElementById('final-ai-score');
const mysteryGame = document.getElementById('mystery-game');
const mysteryRank = document.getElementById('mystery-rank');
const mysteryTribe = document.getElementById('mystery-tribe');
const mysteryWord = document.getElementById('mystery-word');
const mysteryFirstLetter = document.getElementById('mystery-first-letter');
const mysteryAnswer = document.getElementById('mystery-answer');
const guessYokaiBtn = document.getElementById('guess-yokai-btn');
const mysteryMessage = document.getElementById('mystery-message');
const mysteryNextBtn = document.getElementById('mystery-next-btn');
const minigameModeButtons = document.querySelectorAll('.minigame-mode');
const adventureGame = document.getElementById('adventure-game');
const adventureSelection = document.getElementById('adventure-selection');
const adventureBattle = document.getElementById('adventure-battle');
const adventureResults = document.getElementById('adventure-results');
const adventureYokaiList = document.getElementById('adventure-yokai-list');
const adventureSelectedCount = document.getElementById('adventure-selected-count');
const startAdventureBtn = document.getElementById('start-adventure-btn');
const adventurePlayerTeamEl = document.getElementById('adventure-player-team');
const adventureEnemyTeamEl = document.getElementById('adventure-enemy-team');
const adventureTurnLabel = document.getElementById('adventure-turn-label');
const adventureMessage = document.getElementById('adventure-message');
const adventureHint = document.getElementById('adventure-hint');
const adventureDice = document.getElementById('adventure-dice');
const adventureRollBtn = document.getElementById('adventure-roll-btn');
const adventureAbilityBtn = document.getElementById('adventure-ability-btn');
const adventureAttackBtn = document.getElementById('adventure-attack-btn');
const adventureRerollBtn = document.getElementById('adventure-reroll-btn');
const adventureResultTitle = document.getElementById('adventure-result-title');
const adventureResultSummary = document.getElementById('adventure-result-summary');
const adventureRewardMessage = document.getElementById('adventure-reward-message');
const restartAdventureBtn = document.getElementById('restart-adventure-btn');

const yoCoinsBalance = document.getElementById('yo-coins-balance');
const fragmentsBalance = document.getElementById('fragments-balance');
const tokensBalance = document.getElementById('tokens-balance');
const expendekaiGrid = document.getElementById('expendekaiGrid');
const openTenBtn = document.getElementById('openTenBtn');

let isOpening = false;
let currentSeries = 1;
let medalliumSeries = 1;
let medalliumPage = 0;
const MEDALLIUM_PAGE_SIZE = 12;
let currentMinigameMode = 'battle';

const seriesInfo = {
    1: { name: "Vínculos Espirituales", color: "#ef4444", regularCount: 38 },
    2: { name: "Remolinos temibles", color: "#3b82f6", regularCount: 42 },
    3: { name: "Aura siniestra", color: "#8b5cf6", regularCount: 57 },
    4: { name: "Cerezos florecientes", color: "#22c55e", regularCount: 44 }
};

// Init from local storage
function init() {
    const savedInv = localStorage.getItem('yokaiInventory');
    const savedCoins = localStorage.getItem('yoCoins');
    const savedFragments = localStorage.getItem('tokenFragments');
    const savedTokens = localStorage.getItem('tokens');

    if (savedInv) {
        userInventory = JSON.parse(savedInv);
        recalculateStats();
    }

    if (savedCoins !== null) {
        yoCoins = parseInt(savedCoins);
    } else {
        // First time or empty inventory gift
        const hasMedals = Object.values(userInventory).some(d => d.count > 0);
        if (!hasMedals) {
            yoCoins = 100;
            saveCoins();
        }
    }

    if (savedFragments !== null) tokenFragments = parseInt(savedFragments);
    if (savedTokens !== null) tokens = parseInt(savedTokens);

    updateCoinsUI();
    updateTokensUI();
    updateHeaderSeries();
    renderMedallium();
}

function updateHeaderSeries() {
    const badge = document.getElementById('current-series-badge');
    if (badge && seriesInfo[currentSeries]) {
        badge.textContent = seriesInfo[currentSeries].name;
    }
    
    const packTitle = document.getElementById('packTitle');
    if (packTitle && seriesInfo[currentSeries]) {
        packTitle.textContent = seriesInfo[currentSeries].name;
    }
}

function updateCoinsUI() {
    yoCoinsBalance.textContent = yoCoins;
}

function updateTokensUI() {
    fragmentsBalance.textContent = tokenFragments;
    tokensBalance.textContent = tokens;
}

function saveCoins() {
    localStorage.setItem('yoCoins', yoCoins);
}

function saveTokens() {
    localStorage.setItem('tokenFragments', tokenFragments);
    localStorage.setItem('tokens', tokens);
}

function addFragments(amount) {
    tokenFragments += amount;
    while(tokenFragments >= 50) {
        tokenFragments -= 50;
        tokens += 1;
    }
    saveTokens();
    updateTokensUI();
}

// Function to pull a single random Yokai based on probabilities
function pullYokai(seriesId) {
    const rand = Math.random() * 100;
    let cumulative = 0;
    let selectedRarity = "Común";

    for (let rarity of rarities) {
        cumulative += rarity.chance;
        if (rand <= cumulative) {
            selectedRarity = rarity.name;
            break;
        }
    }

    // Filter master list by series and rarity
    const pool = yokaiMasterList.filter(y => y.series === seriesId && y.rarity === selectedRarity);
    
    // Fallback if pool is empty (shouldn't happen with correct data)
    if (pool.length === 0) {
        return pullYokai(seriesId === 1 ? 1 : 1); // Default to S1 if something is wrong
    }

    const selectedYokai = pool[Math.floor(Math.random() * pool.length)];

    return {
        name: selectedYokai.name,
        rarity: selectedYokai.rarity,
        image: selectedYokai.image,
        tribe: selectedYokai.tribe,
        rank: selectedYokai.rank,
        series: selectedYokai.series
    };
}

// Function to open the bag
function openBag() {
    if (isOpening) return;
    if (yoCoins < 30) {
        alert("¡No tienes suficientes Yo-Coins! Juega minijuegos para conseguir más.");
        return;
    }

    yoCoins -= 30;
    saveCoins();
    updateCoinsUI();

    isOpening = true;
    blindBag.classList.add('opening');

    setTimeout(() => {
        packContainer.classList.add('hidden');
        blindBag.classList.remove('opening');

        const pulledMedals = [pullYokai(currentSeries), pullYokai(currentSeries), pullYokai(currentSeries)];
        displayMedals(pulledMedals);
        addFragments(2);
    }, 600);
}

function openTenBags() {
    if (isOpening) return;
    if (yoCoins < 300) {
        alert("¡No tienes suficientes Yo-Coins! Juega minijuegos para conseguir más.");
        return;
    }

    yoCoins -= 300;
    saveCoins();
    updateCoinsUI();

    isOpening = true;
    blindBag.classList.add('opening');

    setTimeout(() => {
        packContainer.classList.add('hidden');
        blindBag.classList.remove('opening');

        const pulledMedals = [];
        for (let i = 0; i < 30; i++) {
            pulledMedals.push(pullYokai(currentSeries));
        }
        displayMedals(pulledMedals);
        addFragments(20);
    }, 600);
}

// Function to display any number of medals
function displayMedals(medals) {
    medalsGrid.innerHTML = '';
    resultsContainer.classList.remove('hidden');
    resultsContainer.setAttribute('data-count', medals.length);
    resultsContainer.classList.toggle('ten-pack', medals.length === 30);
    actionButtons.classList.add('hidden');

    medals.forEach((medal, index) => {
        const medalEl = document.createElement('div');
        medalEl.className = 'medal-wrapper';
        medalEl.style.animationDelay = `${index * 0.2}s`;
        medalEl.classList.add('reveal-anim');

        medalEl.innerHTML = `
            <div class="medal-inner">
                <div class="medal-front">
                    <span style="font-size: 3rem;">?</span>
                </div>
                <div class="medal-back" data-rarity="${medal.rarity}">
                    <img src="images/series${medal.series}/${medal.image}" alt="${medal.name}" class="medal-image">
                    
                    <div class="medal-header-info">
                        <img src="images/tribus/${medal.tribe.toLowerCase()}.webp" class="tribe-icon" alt="${medal.tribe}" title="Tribu: ${medal.tribe}">
                        <img src="images/rangos/rango${medal.rank}.webp" class="rank-icon" alt="Rango ${medal.rank}" title="Rango ${medal.rank}">
                    </div>

                    <div class="medal-name-container">
                        <div class="medal-name">${medal.name}</div>
                    </div>
                    
                    <div class="medal-rarity">${medal.rarity}</div>
                </div>
            </div>
        `;

        medalsGrid.appendChild(medalEl);

        // Add to inventory
        if (!userInventory[medal.name]) {
            userInventory[medal.name] = { count: 0, rarity: medal.rarity };
        }
        userInventory[medal.name].count++;

        setTimeout(() => {
            medalEl.classList.add('flipped');
            if (medal.rarity === 'Legendario') {
                createConfetti();
            }
        }, 1000 + (index * 400));
    });

    // Save and re-render after pulls
    saveInventory();
    recalculateStats();

    setTimeout(() => {
        renderMedallium();
        actionButtons.classList.remove('hidden');
        isOpening = false;
    }, 1000 + (Math.min(medals.length, 6) * 400) + 500);
}

// Recalculate stats based on inventory
function recalculateStats() {
    stats = { "Común": 0, "Poco común": 0, "Inusual": 0, "Legendario": 0, "Especial": 0 };

    // Count total unique medals acquired by rarity
    for (const [name, data] of Object.entries(userInventory)) {
        if (data.count > 0) {
            stats[data.rarity]++;
        }
    }
    updateStatsUI();
}

// Update Stats UI
function updateStatsUI() {
    document.getElementById('stat-comun').textContent = stats['Común'];
    document.getElementById('stat-poco').textContent = stats['Poco común'];
    document.getElementById('stat-inusual').textContent = stats['Inusual'];
    document.getElementById('stat-legendario').textContent = stats['Legendario'];

    // Especial stat (if it exists in HTML)
    const statEspecial = document.getElementById('stat-especial');
    if (statEspecial) statEspecial.textContent = stats['Especial'];
}

// Render the Medallium section
function renderMedallium() {
    medalliumGrid.innerHTML = '';
    let collectedCount = 0;
    
    // Filter master list by current medallium series
    const seriesYokais = yokaiMasterList.filter(y => y.series === medalliumSeries);
    const pageCount = Math.max(1, Math.ceil(seriesYokais.length / MEDALLIUM_PAGE_SIZE));
    const spreadCount = Math.ceil(pageCount / 2);
    medalliumPage = Math.min(medalliumPage, spreadCount - 1);

    seriesYokais.forEach(yokai => {
        const invData = userInventory[yokai.name];
        if (invData && invData.count > 0) collectedCount++;
    });

    for (let spreadSide = 0; spreadSide < 2; spreadSide++) {
        const pageNumber = medalliumPage * 2 + spreadSide;
        const page = document.createElement('div');
        page.className = 'medallium-album-page';
        page.setAttribute('aria-label', `Página ${pageNumber + 1}`);

        const pageYokais = seriesYokais.slice(
            pageNumber * MEDALLIUM_PAGE_SIZE,
            (pageNumber + 1) * MEDALLIUM_PAGE_SIZE
        );

        pageYokais.forEach(yokai => {
            const slot = document.createElement('div');
            const invData = userInventory[yokai.name];

            if (invData && invData.count > 0) {
                slot.className = 'medallium-slot unlocked reveal-anim';
                slot.setAttribute('data-rarity', yokai.rarity);

                const countBadge = invData.count > 1 ? `<div class="slot-count">x${invData.count}</div>` : '';

                slot.innerHTML = `
                    ${countBadge}
                    <img src="images/series${yokai.series}/${yokai.image}" alt="${yokai.name}" class="medallium-image">
                    <span>${yokai.name}</span>
                `;
                slot.onclick = () => openMedalModal(yokai);
            } else {
                slot.className = 'medallium-slot locked';
                slot.innerHTML = `
                    <img src="images/series${yokai.series}/${yokai.image}" alt="?" class="medallium-image locked-img">
                    <span>#${yokai.id}</span>
                `;
            }

            page.appendChild(slot);
        });

        for (let i = pageYokais.length; i < MEDALLIUM_PAGE_SIZE; i++) {
            const emptySlot = document.createElement('div');
            emptySlot.className = 'medallium-slot empty-slot';
            emptySlot.setAttribute('aria-hidden', 'true');
            page.appendChild(emptySlot);
        }

        medalliumGrid.appendChild(page);
    }

    medalliumProgress.textContent = `${collectedCount}/${seriesYokais.length}`;
    const firstPage = medalliumPage * 2 + 1;
    const lastPage = Math.min(firstPage + 1, pageCount);
    medalliumPageLabel.textContent = `Páginas ${firstPage}-${lastPage} de ${pageCount}`;
    medalliumPrevPage.disabled = medalliumPage === 0;
    medalliumNextPage.disabled = medalliumPage >= spreadCount - 1;
}

// Save to localStorage and check special unlocks
function saveInventory() {
    localStorage.setItem('yokaiInventory', JSON.stringify(userInventory));
    checkSpecialUnlocks();
}

// Special Unlock Logic (Zafinyan for S1, Esmenyan for S2, Rubinyan for S3)
function checkSpecialUnlocks() {
    // Check Series 1 completion
    let series1Regulars = yokaiMasterList.filter(y => y.series === 1 && y.rarity !== "Especial");
    let collectedS1 = series1Regulars.filter(y => userInventory[y.name] && userInventory[y.name].count > 0).length;

    // If all Series 1 regular medals are collected and we don't have Zafinyan yet
    if (collectedS1 === series1Regulars.length && (!userInventory["Zafinyan"] || userInventory["Zafinyan"].count === 0)) {
        userInventory["Zafinyan"] = { count: 1, rarity: "Especial" };
        localStorage.setItem('yokaiInventory', JSON.stringify(userInventory));

        setTimeout(() => {
            alert("¡Felicidades! Has completado la Serie 1 y has obtenido a Zafinyan (Especial).");
            recalculateStats();
            renderMedallium();
            createConfetti();
        }, 500);
    }

    // Check Series 2 completion
    let series2Regulars = yokaiMasterList.filter(y => y.series === 2 && y.rarity !== "Especial");
    let collectedS2 = series2Regulars.filter(y => userInventory[y.name] && userInventory[y.name].count > 0).length;

    // If all Series 2 regular medals are collected and we don't have Esmenyan yet
    if (collectedS2 === series2Regulars.length && (!userInventory["Esmenyan"] || userInventory["Esmenyan"].count === 0)) {
        userInventory["Esmenyan"] = { count: 1, rarity: "Especial" };
        localStorage.setItem('yokaiInventory', JSON.stringify(userInventory));

        setTimeout(() => {
            alert("¡Felicidades! Has completado la Serie 2 y has obtenido a Esmenyan (Especial).");
            recalculateStats();
            renderMedallium();
            createConfetti();
        }, 500);
    }

    // Check Series 3 completion
    let series3Regulars = yokaiMasterList.filter(y => y.series === 3 && y.rarity !== "Especial");
    let collectedS3 = series3Regulars.filter(y => userInventory[y.name] && userInventory[y.name].count > 0).length;

    // If all Series 3 regular medals are collected and we don't have Rubinyan yet
    if (collectedS3 === series3Regulars.length && (!userInventory["Rubinyan"] || userInventory["Rubinyan"].count === 0)) {
        userInventory["Rubinyan"] = { count: 1, rarity: "Especial" };
        localStorage.setItem('yokaiInventory', JSON.stringify(userInventory));

        setTimeout(() => {
            alert("¡Felicidades! Has completado la Serie 3 y has obtenido a Rubinyan (Especial).");
            recalculateStats();
            renderMedallium();
            createConfetti();
        }, 500);
    }

    // Check Series 4 completion
    let series4Regulars = yokaiMasterList.filter(y => y.series === 4 && y.rarity !== "Especial");
    let collectedS4 = series4Regulars.filter(y => userInventory[y.name] && userInventory[y.name].count > 0).length;

    if (collectedS4 === series4Regulars.length && (!userInventory["Topanyan"] || userInventory["Topanyan"].count === 0)) {
        userInventory["Topanyan"] = { count: 1, rarity: "Especial" };
        localStorage.setItem('yokaiInventory', JSON.stringify(userInventory));

        setTimeout(() => {
            alert("¡Felicidades! Has completado la Serie 4 y has obtenido a Topanyan (Especial).");
            recalculateStats();
            renderMedallium();
            createConfetti();
        }, 500);
    }
}

// Modal Logic
function openMedalModal(yokai) {
    const modal = document.getElementById('medalModal');
    if (!modal) return;

    document.getElementById('modalMedalImage').src = `images/series${yokai.series}/${yokai.image}`;
    document.getElementById('modalMedalName').textContent = yokai.name;
    document.getElementById('modalMedalRarity').textContent = yokai.rarity;

    document.getElementById('modalMedalTribe').src = `images/tribus/${yokai.tribe.toLowerCase()}.webp`;
    document.getElementById('modalMedalTribe').title = `Tribu: ${yokai.tribe}`;

    document.getElementById('modalMedalRank').src = `images/rangos/rango${yokai.rank}.webp`;
    document.getElementById('modalMedalRank').title = `Rango ${yokai.rank}`;

    // Set rarity styling class
    const rarityBadge = document.getElementById('modalMedalRarity');
    rarityBadge.className = 'modal-rarity';
    rarityBadge.classList.add(`rarity-${yokai.rarity.toLowerCase().replace(/\s+/g, '-')}`);

    modal.classList.add('active');
}

function closeMedalModal() {
    const modal = document.getElementById('medalModal');
    if (modal) modal.classList.remove('active');
}

// --- MINIGAME LOGIC ---

let selectedYokais = [];
let aiTeam = [];
let playerScore = 0;
let aiScore = 0;
let roundsPlayed = 0;
let isRoundInProgress = false;

function initMinigameSelection() {
    minigameYokaiList.innerHTML = '';
    selectedYokais = [];
    updateSelectionUI();

    const unlockedYokais = yokaiMasterList.filter(y => userInventory[y.name] && userInventory[y.name].count > 0);

    if (unlockedYokais.length < 6) {
        minigameYokaiList.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">Necesitas al menos 6 Yo-Kai diferentes en tu colección para jugar.</p>`;
        return;
    }

    unlockedYokais.forEach(yokai => {
        const slot = document.createElement('div');
        slot.className = 'medallium-slot unlocked selectable reveal-anim';
        slot.setAttribute('data-rarity', yokai.rarity);

        slot.innerHTML = `
            <img src="images/series${yokai.series}/${yokai.image}" alt="${yokai.name}" class="medallium-image">
            <span>${yokai.name}</span>
        `;

        slot.onclick = () => toggleYokaiSelection(yokai, slot);
        minigameYokaiList.appendChild(slot);
    });
}

function toggleYokaiSelection(yokai, element) {
    const index = selectedYokais.findIndex(y => y.id === yokai.id);

    if (index > -1) {
        selectedYokais.splice(index, 1);
        element.classList.remove('selected');
    } else {
        if (selectedYokais.length >= 6) return;
        selectedYokais.push(yokai);
        element.classList.add('selected');
    }

    updateSelectionUI();
}

function updateSelectionUI() {
    selectedCountEl.textContent = selectedYokais.length;
    startBattleBtn.disabled = selectedYokais.length !== 6;
}

function startBattle() {
    minigameSelection.classList.add('hidden');
    minigameBattle.classList.remove('hidden');

    playerScore = 0;
    aiScore = 0;
    roundsPlayed = 0;
    updateBattleStats();

    // Generate AI Team (No Legendary or Special)
    const aiPool = yokaiMasterList.filter(y => y.rarity !== 'Legendario' && y.rarity !== 'Especial');
    aiTeam = [];
    const tempPool = [...aiPool];
    for (let i = 0; i < 6; i++) {
        const randIndex = Math.floor(Math.random() * tempPool.length);
        aiTeam.push(tempPool.splice(randIndex, 1)[0]);
    }

    renderPlayerHand();
    battleMessage.textContent = "¡Elige un Yo-Kai!";
    playerSlot.innerHTML = '<div class="slot-placeholder">?</div>';
    aiSlot.innerHTML = '<div class="slot-placeholder">?</div>';
}

function renderPlayerHand() {
    playerHandGrid.innerHTML = '';
    selectedYokais.forEach(yokai => {
        const medal = document.createElement('div');
        medal.className = 'medallium-slot unlocked hand-medal';
        medal.setAttribute('data-rarity', yokai.rarity);
        medal.innerHTML = `
            <img src="images/series${yokai.series}/${yokai.image}" alt="${yokai.name}" class="medallium-image">
        `;
        medal.onclick = () => {
            if (!isRoundInProgress && !medal.classList.contains('played')) {
                playRound(yokai, medal);
            }
        };
        playerHandGrid.appendChild(medal);
    });
}

function playRound(playerYokai, medalElement) {
    isRoundInProgress = true;
    medalElement.classList.add('played');

    // AI chooses
    const aiYokai = aiTeam[roundsPlayed];

    // Clear slots
    playerSlot.innerHTML = '';
    aiSlot.innerHTML = '';
    playerSlot.classList.remove('winner-pulse');
    aiSlot.classList.remove('winner-pulse');

    // Show Player Medal
    const pMedal = createBattleMedal(playerYokai);
    pMedal.classList.add('medal-clash-left');
    playerSlot.appendChild(pMedal);

    battleMessage.textContent = "VS";

    setTimeout(() => {
        // Show AI Medal
        const aMedal = createBattleMedal(aiYokai);
        aMedal.classList.add('medal-clash-right');
        aiSlot.appendChild(aMedal);

        // Calculate result
        const result = calculateWinner(playerYokai, aiYokai);

        setTimeout(() => {
            if (result === 'player') {
                playerScore++;
                battleMessage.textContent = "¡Ganaste!";
                playerSlot.classList.add('winner-pulse');
            } else if (result === 'ai') {
                aiScore++;
                battleMessage.textContent = "¡Perdiste!";
                aiSlot.classList.add('winner-pulse');
            } else {
                battleMessage.textContent = "¡Empate!";
            }

            updateBattleStats();
            roundsPlayed++;

            setTimeout(() => {
                isRoundInProgress = false;
                if (roundsPlayed === 6) {
                    endBattle();
                } else {
                    battleMessage.textContent = "¡Elige el siguiente!";
                }
            }, 1500);
        }, 1000);
    }, 500);
}

function createBattleMedal(yokai) {
    const el = document.createElement('div');
    el.className = 'medallium-slot unlocked';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.margin = '0';
    el.setAttribute('data-rarity', yokai.rarity);
    el.innerHTML = `
        <img src="images/series${yokai.series}/${yokai.image}" alt="${yokai.name}" class="medallium-image">
        <div class="medal-header-info" style="padding: 0 10px; top: 10px;">
            <img src="images/tribus/${yokai.tribe.toLowerCase()}.webp" class="tribe-icon" style="width:25px; height:25px;">
            <img src="images/rangos/rango${yokai.rank}.webp" class="rank-icon" style="width:25px; height:25px;">
        </div>
    `;
    return el;
}

function calculateWinner(p, a) {
    // Tribe Advantage
    if (tribeAdvantages[p.tribe] === a.tribe) return 'player';
    if (tribeAdvantages[a.tribe] === p.tribe) return 'ai';

    // Rank Comparison
    const pRank = rankValues[p.rank];
    const aRank = rankValues[a.rank];

    if (pRank > aRank) return 'player';
    if (aRank > pRank) return 'ai';

    return 'tie';
}

function updateBattleStats() {
    playerScoreEl.textContent = playerScore;
    aiScoreEl.textContent = aiScore;
}

function endBattle() {
    let reward = 0;
    if (playerScore > aiScore) {
        reward = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // 5 to 15
        finalResultTitle.textContent = "¡VICTORIA!";
        finalResultTitle.style.color = "#fde047";
        createConfetti();
    } else if (aiScore > playerScore) {
        reward = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // 2 to 5
        finalResultTitle.textContent = "DERROTA";
        finalResultTitle.style.color = "#ef4444";
    } else {
        reward = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // 2 to 5
        finalResultTitle.textContent = "EMPATE";
        finalResultTitle.style.color = "#94a3b8";
    }

    yoCoins += reward;
    saveCoins();
    updateCoinsUI();

    const rewardMsg = document.createElement('p');
    rewardMsg.style.fontSize = '1.2rem';
    rewardMsg.style.color = '#fde047';
    rewardMsg.style.marginTop = '1rem';
    rewardMsg.innerHTML = `Has obtenido <strong>${reward}</strong> Yo-Coins 🪙`;

    setTimeout(() => {
        minigameBattle.classList.add('hidden');
        minigameResults.classList.remove('hidden');

        finalPlayerScoreEl.textContent = playerScore;
        finalAiScoreEl.textContent = aiScore;

        const card = document.querySelector('.results-card');
        const oldMsg = card.querySelector('.reward-message');
        if (oldMsg) oldMsg.remove();
        rewardMsg.classList.add('reward-message');
        card.insertBefore(rewardMsg, restartGameBtn);
    }, 1000);
}

function restartGame() {
    minigameResults.classList.add('hidden');
    minigameSelection.classList.remove('hidden');
    mysteryGame.classList.add('hidden');
    initMinigameSelection();
}

const adventureRankStats = {
    E: { dice: 1, health: 10 },
    D: { dice: 2, health: 20 },
    C: { dice: 3, health: 30 },
    B: { dice: 4, health: 40 },
    A: { dice: 5, health: 50 },
    S: { dice: 6, health: 60 }
};

const tribeAbilityNames = {
    Valiente: 'Dado doble',
    Misterioso: 'Volver a lanzar',
    Robusto: 'Reducir daño',
    Guapo: 'Dado extra',
    Amable: 'Curar aliado',
    Oscuro: 'Robar vida',
    Siniestro: 'Aturdir rivales',
    Escurridizo: 'Esquivar'
};

let adventureSelectedYokais = [];
let adventurePlayerTeam = [];
let adventureEnemyTeam = [];
let adventureTurnsCompleted = 0;
let adventureActorId = null;
let adventureTargetId = null;
let adventureTargetMode = 'actor';
let adventureDiceValues = null;
let adventureSelectedDie = null;
let adventurePendingSkill = null;
let adventureRerollUsed = false;
let adventureEnemyStunned = false;

function initAdventureSelection() {
    adventureYokaiList.innerHTML = '';
    adventureSelectedYokais = [];
    adventureSelectedCount.textContent = '0';
    startAdventureBtn.disabled = true;
    adventureSelection.classList.remove('hidden');
    adventureBattle.classList.add('hidden');
    adventureResults.classList.add('hidden');

    const unlockedYokais = yokaiMasterList.filter(y => userInventory[y.name] && userInventory[y.name].count > 0);
    if (unlockedYokais.length < 3) {
        adventureYokaiList.innerHTML = '<p class="adventure-empty">Necesitas al menos 3 Yo-Kai diferentes en tu colección para jugar.</p>';
        return;
    }

    unlockedYokais.forEach(yokai => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'adventure-pick-card';
        card.innerHTML = `
            <img src="images/series${yokai.series}/${yokai.image}" alt="">
            <span class="adventure-pick-name">${yokai.name}</span>
            <span class="adventure-pick-meta">Rango ${yokai.rank} · ${yokai.tribe}</span>
        `;
        card.addEventListener('click', () => {
            const selectedIndex = adventureSelectedYokais.findIndex(selected => selected.id === yokai.id);
            if (selectedIndex >= 0) {
                adventureSelectedYokais.splice(selectedIndex, 1);
                card.classList.remove('selected');
            } else if (adventureSelectedYokais.length < 3) {
                adventureSelectedYokais.push(yokai);
                card.classList.add('selected');
            }

            adventureSelectedCount.textContent = adventureSelectedYokais.length;
            startAdventureBtn.disabled = adventureSelectedYokais.length !== 3;
        });
        adventureYokaiList.appendChild(card);
    });
}

function createAdventureFighter(yokai, side) {
    const { dice, health } = adventureRankStats[yokai.rank] || adventureRankStats.E;
    return {
        yokai,
        side,
        hp: health,
        maxHp: health,
        dice,
        abilityUsed: false,
        actedThisRound: false,
        shielded: false,
        dodgeTurns: 0
    };
}

function startAdventure() {
    if (adventureSelectedYokais.length !== 3) return;

    adventurePlayerTeam = adventureSelectedYokais.map(yokai => createAdventureFighter(yokai, 'player'));
    const playerIds = new Set(adventureSelectedYokais.map(yokai => yokai.id));
    const opponentPool = yokaiMasterList.filter(yokai => !playerIds.has(yokai.id));
    const shuffledOpponents = [...opponentPool].sort(() => Math.random() - 0.5);
    adventureEnemyTeam = shuffledOpponents.slice(0, 3).map(yokai => createAdventureFighter(yokai, 'enemy'));
    adventureTurnsCompleted = 0;
    adventureActorId = null;
    adventureTargetId = null;
    adventureTargetMode = 'actor';
    adventureDiceValues = null;
    adventureSelectedDie = null;
    adventurePendingSkill = null;
    adventureRerollUsed = false;
    adventureEnemyStunned = false;
    adventureMessage.textContent = 'Elige un Yo-Kai de tu equipo para actuar.';
    adventureHint.textContent = 'Cada dado causa entre 1 y 6 puntos de daño. Los rivales atacan cuando todo tu equipo ha actuado.';

    adventureSelection.classList.add('hidden');
    adventureResults.classList.add('hidden');
    adventureBattle.classList.remove('hidden');
    renderAdventureTeams();
    updateAdventureControls();
}

function renderAdventureTeams() {
    renderAdventureTeam(adventurePlayerTeam, adventurePlayerTeamEl);
    renderAdventureTeam(adventureEnemyTeam, adventureEnemyTeamEl);
}

function renderAdventureTeam(team, container) {
    container.innerHTML = '';
    team.forEach(fighter => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = `adventure-fighter-card ${fighter.hp <= 0 ? 'defeated' : ''} ${fighter.actedThisRound ? 'spent-turn' : ''}`;
        if (fighter.side === 'player' && fighter.yokai.id === adventureActorId) card.classList.add('active-fighter');
        if (fighter.side === 'enemy' && fighter.yokai.id === adventureTargetId) card.classList.add('targeted-fighter');
        card.disabled = fighter.hp <= 0 || (fighter.side === 'player' && fighter.actedThisRound);

        const healthPercent = Math.max(0, (fighter.hp / fighter.maxHp) * 100);
        const status = [
            fighter.actedThisRound ? 'Turno usado' : '',
            fighter.shielded ? 'Protegido' : '',
            fighter.dodgeTurns > 0 ? `Esquiva ${fighter.dodgeTurns}` : ''
        ].filter(Boolean).join(' · ');

        card.innerHTML = `
            <div class="adventure-fighter-topline">
                <img src="images/series${fighter.yokai.series}/${fighter.yokai.image}" alt="">
                <div class="adventure-fighter-info">
                    <strong>${fighter.yokai.name}</strong>
                    <span>Rango ${fighter.yokai.rank} · ${fighter.yokai.tribe}</span>
                    <span>${fighter.dice} ${fighter.dice === 1 ? 'dado' : 'dados'} · ${fighter.abilityUsed ? 'Habilidad usada' : tribeAbilityNames[fighter.yokai.tribe]}</span>
                </div>
            </div>
            <div class="adventure-health-label"><span>Vida ${status ? `· ${status}` : ''}</span><span>${Math.max(0, fighter.hp)}/${fighter.maxHp}</span></div>
            <div class="adventure-health-track"><span style="width:${healthPercent}%"></span></div>
        `;

        if (fighter.side === 'player') {
            card.addEventListener('click', () => handleAdventurePlayerSelection(fighter));
        } else {
            card.addEventListener('click', () => handleAdventureEnemySelection(fighter));
        }
        container.appendChild(card);
    });
}

function handleAdventurePlayerSelection(fighter) {
    if (fighter.hp <= 0 || fighter.actedThisRound) return;

    if (adventureTargetMode === 'heal') {
        const heal = Math.floor(Math.random() * 6) + 1;
        const previousHealth = fighter.hp;
        fighter.hp = Math.min(fighter.maxHp, fighter.hp + heal);
        const actualHeal = fighter.hp - previousHealth;
        const actor = adventurePlayerTeam.find(member => member.yokai.id === adventureActorId);
        actor.abilityUsed = true;
        adventureTargetMode = 'actor';
        renderAdventureTeams();
        finishAdventureTurn(false, `${actor.yokai.name} cura a ${fighter.yokai.name} con 1d6: ${actualHeal} puntos de vida.`);
        return;
    }

    if (adventureDiceValues || adventurePendingSkill) return;
    adventureActorId = fighter.yokai.id;
    adventureTargetId = null;
    adventureMessage.textContent = `${fighter.yokai.name} está listo. Elige tirar los dados o usar su habilidad.`;
    updateAdventureControls();
    renderAdventureTeams();
}

function handleAdventureEnemySelection(fighter) {
    if (fighter.hp <= 0) return;

    if (adventureTargetMode === 'drain') {
        const actor = adventurePlayerTeam.find(member => member.yokai.id === adventureActorId);
        const stolenHealth = Math.floor(Math.random() * 6) + 1;
        const actualDamage = Math.min(fighter.hp, stolenHealth);
        fighter.hp -= actualDamage;
        actor.hp = Math.min(actor.maxHp, actor.hp + actualDamage);
        actor.abilityUsed = true;
        adventureTargetMode = 'actor';
        renderAdventureTeams();
        if (checkAdventureEnd()) return;
        finishAdventureTurn(false, `${actor.yokai.name} roba ${actualDamage} puntos de vida a ${fighter.yokai.name} con 1d6.`);
        return;
    }

    if (!adventureDiceValues || adventureTargetMode !== 'actor') return;
    adventureTargetId = fighter.yokai.id;
    adventureMessage.textContent = `${fighter.yokai.name} seleccionado como objetivo. Confirma el ataque.`;
    updateAdventureControls();
    renderAdventureTeams();
}

function updateAdventureControls() {
    const actor = adventurePlayerTeam.find(fighter => fighter.yokai.id === adventureActorId && fighter.hp > 0);
    const hasDice = Array.isArray(adventureDiceValues);
    adventureTurnLabel.textContent = `Turno ${adventureTurnsCompleted + 1}`;

    adventureRollBtn.disabled = !actor || hasDice || adventureTargetMode !== 'actor';
    adventureAbilityBtn.disabled = !actor || adventureTurnsCompleted < 2 || actor.abilityUsed || hasDice || adventureTargetMode !== 'actor';
    adventureAbilityBtn.textContent = actor
        ? `${tribeAbilityNames[actor.yokai.tribe] || 'Habilidad de tribu'}${adventureTurnsCompleted < 2 ? ' · tras 2 turnos' : ''}`
        : 'Habilidad de tribu';
    adventureAttackBtn.classList.toggle('hidden', !hasDice);
    adventureAttackBtn.disabled = !hasDice || !adventureTargetId ||
        (adventurePendingSkill === 'Misterioso' && !adventureRerollUsed) ||
        (adventurePendingSkill === 'Valiente' && adventureSelectedDie === null);
    adventureRerollBtn.classList.toggle('hidden', !(hasDice && adventurePendingSkill === 'Misterioso'));
    adventureRerollBtn.disabled = adventureSelectedDie === null || adventureRerollUsed;
}

function rollAdventureDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollAdventureAttack() {
    const actor = adventurePlayerTeam.find(fighter => fighter.yokai.id === adventureActorId && fighter.hp > 0);
    if (!actor || adventureDiceValues) return;

    const extraDie = adventurePendingSkill === 'Guapo' ? 1 : 0;
    adventureDiceValues = Array.from({ length: actor.dice + extraDie }, rollAdventureDie);
    adventureSelectedDie = null;
    adventureRerollUsed = false;
    adventureTargetId = null;
    renderAdventureDice();

    if (adventurePendingSkill === 'Misterioso') {
        adventureMessage.textContent = 'Selecciona un dado y vuelve a lanzarlo antes de elegir objetivo.';
    } else if (adventurePendingSkill === 'Valiente') {
        adventureMessage.textContent = 'Selecciona el dado cuyo valor quieres duplicar y luego el objetivo.';
    } else {
        adventureMessage.textContent = 'Selecciona a qué rival quieres hacer daño.';
    }
    updateAdventureControls();
}

function renderAdventureDice() {
    adventureDice.innerHTML = '';
    if (!adventureDiceValues) return;

    adventureDiceValues.forEach((value, index) => {
        const die = document.createElement('button');
        die.type = 'button';
        die.className = 'adventure-die';
        die.textContent = value;
        die.disabled = !['Valiente', 'Misterioso'].includes(adventurePendingSkill) ||
            (adventurePendingSkill === 'Misterioso' && adventureRerollUsed);
        if (adventureSelectedDie === index) die.classList.add('selected-die');
        die.addEventListener('click', () => {
            adventureSelectedDie = index;
            renderAdventureDice();
            updateAdventureControls();
        });
        adventureDice.appendChild(die);
    });
}

function rerollAdventureDie() {
    if (adventurePendingSkill !== 'Misterioso' || adventureSelectedDie === null || adventureRerollUsed) return;
    const oldValue = adventureDiceValues[adventureSelectedDie];
    adventureDiceValues[adventureSelectedDie] = rollAdventureDie();
    adventureRerollUsed = true;
    renderAdventureDice();
    adventureMessage.textContent = `El dado cambió de ${oldValue} a ${adventureDiceValues[adventureSelectedDie]}. Elige un rival.`;
    updateAdventureControls();
}

function activateAdventureAbility() {
    const actor = adventurePlayerTeam.find(fighter => fighter.yokai.id === adventureActorId && fighter.hp > 0);
    if (!actor || adventureTurnsCompleted < 2 || actor.abilityUsed) return;

    const tribe = actor.yokai.tribe;
    if (['Valiente', 'Misterioso', 'Guapo'].includes(tribe)) {
        actor.abilityUsed = true;
        adventurePendingSkill = tribe;
        adventureMessage.textContent = tribe === 'Guapo'
            ? `${actor.yokai.name} obtiene un dado adicional para este ataque.`
            : `${actor.yokai.name} prepara su habilidad: ${tribeAbilityNames[tribe]}.`;
        rollAdventureAttack();
        renderAdventureTeams();
        return;
    }

    if (tribe === 'Amable') {
        adventureTargetMode = 'heal';
        adventureMessage.textContent = 'Elige un aliado para curarlo con 1d6.';
        adventureHint.textContent = 'La habilidad de Amable gasta el turno al curar.';
        updateAdventureControls();
        return;
    }

    if (tribe === 'Oscuro') {
        adventureTargetMode = 'drain';
        adventureMessage.textContent = 'Elige un rival para robarle vida con 1d6.';
        adventureHint.textContent = 'El daño robado también cura al Yo-Kai que usa la habilidad.';
        updateAdventureControls();
        return;
    }

    actor.abilityUsed = true;
    if (tribe === 'Robusto') {
        actor.shielded = true;
        finishAdventureTurn(false, `${actor.yokai.name} se protege: el próximo golpe recibido se reduce a la mitad.`);
    } else if (tribe === 'Siniestro') {
        adventureEnemyStunned = true;
        finishAdventureTurn(true, `${actor.yokai.name} aturde a los rivales. No podrán atacar este turno.`);
    } else if (tribe === 'Escurridizo') {
        actor.dodgeTurns = 3;
        finishAdventureTurn(false, `${actor.yokai.name} podrá esquivar cada ataque con un 50% de probabilidad durante 3 ataques.`);
    }
}

function attackAdventureTarget() {
    const actor = adventurePlayerTeam.find(fighter => fighter.yokai.id === adventureActorId && fighter.hp > 0);
    const target = adventureEnemyTeam.find(fighter => fighter.yokai.id === adventureTargetId && fighter.hp > 0);
    if (!actor || !target || !adventureDiceValues) return;
    if (adventurePendingSkill === 'Misterioso' && !adventureRerollUsed) return;
    if (adventurePendingSkill === 'Valiente' && adventureSelectedDie === null) return;

    let damage = adventureDiceValues.reduce((sum, value) => sum + value, 0);
    if (adventurePendingSkill === 'Valiente') damage += adventureDiceValues[adventureSelectedDie];
    target.hp = Math.max(0, target.hp - damage);
    const actionText = `${actor.yokai.name} hace ${damage} de daño a ${target.yokai.name}.`;
    renderAdventureTeams();

    if (checkAdventureEnd()) return;
    finishAdventureTurn(false, actionText);
}

function finishAdventureTurn(skipEnemies, actionText) {
    const actor = adventurePlayerTeam.find(fighter => fighter.yokai.id === adventureActorId);
    if (actor) actor.actedThisRound = true;
    adventureTurnsCompleted++;
    adventureDiceValues = null;
    adventureSelectedDie = null;
    adventurePendingSkill = null;
    adventureRerollUsed = false;
    adventureTargetId = null;
    adventureTargetMode = 'actor';
    adventureActorId = null;

    const remainingAllies = adventurePlayerTeam.filter(fighter => fighter.hp > 0 && !fighter.actedThisRound);
    if (remainingAllies.length > 0) {
        adventureMessage.textContent = `${actionText} Siguiente turno: ${remainingAllies[0].yokai.name}. Los rivales responderán al terminar tu equipo.`;
        adventureHint.textContent = 'Cada Yo-Kai puede actuar una vez antes de que respondan los rivales.';
        renderAdventureTeams();
        updateAdventureControls();
        return;
    }

    const messages = [actionText];
    if (!skipEnemies) {
        adventureEnemyTeam.filter(fighter => fighter.hp > 0).forEach(enemy => {
            const livingAllies = adventurePlayerTeam.filter(fighter => fighter.hp > 0);
            if (livingAllies.length === 0) return;

            if (adventureEnemyStunned) return;

            const target = livingAllies[Math.floor(Math.random() * livingAllies.length)];
            if (target.dodgeTurns > 0) {
                target.dodgeTurns--;
                if (Math.random() < 0.5) {
                    messages.push(`${target.yokai.name} esquiva el ataque de ${enemy.yokai.name}.`);
                    return;
                }
            }

            const damage = Array.from({ length: enemy.dice }, rollAdventureDie).reduce((sum, value) => sum + value, 0);
            const receivedDamage = target.shielded ? Math.ceil(damage / 2) : damage;
            target.shielded = false;
            target.hp = Math.max(0, target.hp - receivedDamage);
            messages.push(`${enemy.yokai.name} ataca a ${target.yokai.name} y causa ${receivedDamage} de daño${receivedDamage < damage ? ` (${damage} antes de reducir)` : ''}.`);
        });
    } else {
        adventureEnemyStunned = false;
        messages.push('Los rivales pierden su turno.');
    }

    adventureEnemyStunned = false;
    adventurePlayerTeam.forEach(fighter => {
        if (fighter.hp > 0) fighter.actedThisRound = false;
    });
    adventureMessage.textContent = messages.join(' ');
    renderAdventureTeams();
    adventureHint.textContent = 'Selecciona un Yo-Kai de tu equipo para el siguiente turno.';
    updateAdventureControls();
    checkAdventureEnd();
}

function checkAdventureEnd() {
    const defeatedEnemies = adventureEnemyTeam.filter(fighter => fighter.hp <= 0).length;
    const defeatedAllies = adventurePlayerTeam.filter(fighter => fighter.hp <= 0).length;

    if (defeatedEnemies === adventureEnemyTeam.length) {
        endAdventure(true, defeatedEnemies, defeatedAllies);
        return true;
    }
    if (defeatedAllies === adventurePlayerTeam.length) {
        endAdventure(false, defeatedEnemies, defeatedAllies);
        return true;
    }
    return false;
}

function endAdventure(won, defeatedEnemies, defeatedAllies) {
    const reward = won
        ? Math.floor(Math.random() * 11) + 5
        : Math.floor(Math.random() * 4) + 2;
    yoCoins += reward;
    saveCoins();
    updateCoinsUI();

    adventureBattle.classList.add('hidden');
    adventureResults.classList.remove('hidden');
    adventureResultTitle.textContent = won ? '¡VICTORIA!' : 'DERROTA';
    adventureResultTitle.style.color = won ? '#fde047' : '#ef4444';
    adventureResultSummary.textContent = won
        ? `Has derrotado a los 3 rivales y han caído ${defeatedAllies} de tus Yo-Kai.`
        : `Has derrotado a ${defeatedEnemies} de los 3 rivales.`;
    adventureRewardMessage.textContent = `Has obtenido ${reward} Yo-Coins.`;
    if (won) createConfetti();
}

let currentMysteryYokai = null;

function setMinigameMode(mode) {
    currentMinigameMode = mode;

    minigameModeButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.mode === mode);
    });

    minigameSelection.classList.toggle('hidden', mode !== 'battle');
    minigameBattle.classList.add('hidden');
    minigameResults.classList.add('hidden');
    mysteryGame.classList.toggle('hidden', mode !== 'mystery');
    adventureGame.classList.toggle('hidden', mode !== 'adventure');

    if (mode === 'mystery') {
        initMysteryGame();
    } else if (mode === 'adventure') {
        initAdventureSelection();
    } else {
        initMinigameSelection();
    }
}

function initMysteryGame() {
    const unlockedYokais = yokaiMasterList.filter(y => userInventory[y.name] && userInventory[y.name].count > 0);

    if (unlockedYokais.length === 0) {
        mysteryWord.textContent = 'Necesitas tener al menos 1 Yo-Kai para jugar.';
        mysteryAnswer.value = '';
        mysteryAnswer.disabled = true;
        guessYokaiBtn.disabled = true;
        mysteryFirstLetter.textContent = '-';
        mysteryRank.src = '';
        mysteryTribe.src = '';
        mysteryNextBtn.classList.add('hidden');
        return;
    }

    currentMysteryYokai = unlockedYokais[Math.floor(Math.random() * unlockedYokais.length)];
    mysteryAnswer.disabled = false;
    guessYokaiBtn.disabled = false;
    mysteryAnswer.value = '';
    mysteryMessage.textContent = '';
    mysteryMessage.className = 'mystery-message';
    mysteryNextBtn.classList.add('hidden');

    mysteryRank.src = `images/rangos/rango${currentMysteryYokai.rank}.webp`;
    mysteryRank.alt = `Rango ${currentMysteryYokai.rank}`;
    mysteryRank.title = `Rango ${currentMysteryYokai.rank}`;
    mysteryTribe.src = `images/tribus/${currentMysteryYokai.tribe.toLowerCase()}.webp`;
    mysteryTribe.alt = `Tribu ${currentMysteryYokai.tribe}`;
    mysteryTribe.title = `Tribu ${currentMysteryYokai.tribe}`;

    const allLetters = Array.from(currentMysteryYokai.name.toUpperCase());
    const revealedIndexes = new Set([0]);
    const eligibleIndexes = allLetters
        .map((char, index) => ({ char, index }))
        .filter(item => item.char !== ' ' && item.index !== 0)
        .map(item => item.index);

    const extraLettersToReveal = Math.min(2, eligibleIndexes.length);
    for (let i = 0; i < extraLettersToReveal; i++) {
        const randomIndex = Math.floor(Math.random() * eligibleIndexes.length);
        revealedIndexes.add(eligibleIndexes.splice(randomIndex, 1)[0]);
    }

    mysteryFirstLetter.textContent = currentMysteryYokai.name.charAt(0).toUpperCase();
    mysteryWord.innerHTML = '';

    allLetters.forEach((char, index) => {
        const slot = document.createElement('span');
        slot.className = 'mystery-letter-slot';

        if (char === ' ') {
            slot.classList.add('space');
            slot.textContent = ' ';
        } else if (revealedIndexes.has(index)) {
            slot.textContent = char;
            slot.classList.add('revealed');
        } else {
            slot.textContent = '_';
        }

        mysteryWord.appendChild(slot);
    });
}

function handleMysteryGuess() {
    if (!currentMysteryYokai) {
        initMysteryGame();
        return;
    }

    const guess = mysteryAnswer.value.trim();
    if (!guess) {
        mysteryMessage.textContent = 'Escribe el nombre para adivinar.';
        mysteryMessage.className = 'mystery-message warning';
        return;
    }

    const normalizedGuess = guess.toLowerCase();
    const normalizedAnswer = currentMysteryYokai.name.toLowerCase();

    if (normalizedGuess === normalizedAnswer) {
        const reward = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        yoCoins += reward;
        saveCoins();
        updateCoinsUI();
        mysteryMessage.textContent = `¡Correcto! Era ${currentMysteryYokai.name}. Has ganado ${reward} Yo-Coins 🪙`;
        mysteryMessage.className = 'mystery-message success';
        createConfetti();
    } else {
        const reward = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        yoCoins += reward;
        saveCoins();
        updateCoinsUI();
        mysteryMessage.textContent = `No era ese nombre. Te llevas ${reward} Yo-Coins 🪙`;
        mysteryMessage.className = 'mystery-message warning';
    }

    mysteryAnswer.disabled = true;
    guessYokaiBtn.disabled = true;
    mysteryNextBtn.classList.remove('hidden');
}

// Reset everything to open another
function resetForNext() {
    resultsContainer.classList.add('hidden');
    packContainer.classList.remove('hidden');
    medalsGrid.innerHTML = '';
}

// Clear whole collection
function resetCollection() {
    if (confirm("¿Estás seguro de que quieres borrar tu colección?")) {
        userInventory = {};
        saveInventory();
        recalculateStats();
        renderMedallium();
        resetForNext();
    }
}

// Expendekai Logic
function renderExpendekai() {
    expendekaiGrid.innerHTML = '';
    const availableYokais = yokaiMasterList.filter(y => y.rarity !== 'Legendario' && y.rarity !== 'Especial');

    availableYokais.forEach(yokai => {
        const itemEl = document.createElement('div');
        itemEl.className = 'expendekai-item reveal-anim';
        
        const isOwned = userInventory[yokai.name] && userInventory[yokai.name].count > 0;
        let ownedBadge = isOwned ? '<div class="item-owned">✓</div>' : '';

        itemEl.innerHTML = `
            <div class="medallium-slot unlocked" data-rarity="${yokai.rarity}" style="position:relative; width: 100px; height: 100px;">
                ${ownedBadge}
                <img src="images/series${yokai.series}/${yokai.image}" alt="${yokai.name}" class="medallium-image">
            </div>
            <div style="font-weight: 800; font-size: 1.1rem; text-align:center;">${yokai.name}</div>
            <div class="medal-rarity" style="font-size: 0.7rem; padding: 0.2rem 0.5rem; margin-top:-5px;">${yokai.rarity}</div>
            <button class="btn-buy" ${tokens < 1 ? 'disabled' : ''}>
                Canjear 1 <img src="images/ficha.png" class="btn-icon" alt="Ficha">
            </button>
        `;

        const buyBtn = itemEl.querySelector('.btn-buy');
        buyBtn.addEventListener('click', () => {
            buyFromExpendekai(yokai);
        });

        expendekaiGrid.appendChild(itemEl);
    });
}

function buyFromExpendekai(yokai) {
    if (tokens >= 1) {
        tokens--;
        
        if (!userInventory[yokai.name]) {
            userInventory[yokai.name] = { count: 0, rarity: yokai.rarity };
        }
        userInventory[yokai.name].count++;
        
        saveTokens();
        saveInventory();
        recalculateStats();
        updateTokensUI();
        renderMedallium();
        renderExpendekai(); // Refresh to update buttons/badges

        alert(`¡Has canjeado 1 Ficha por ${yokai.name}!`);
        openMedalModal(yokai);
    } else {
        alert('No tienes suficientes Fichas.');
    }
}

// Basic Confetti logic for Legendaries
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#fde047', '#f59e0b', '#d97706', '#ffffff'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';

        container.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        confetti.animate([
            { transform: `translate3d(0, 0, 0) rotate(0)`, opacity: 1 },
            { transform: `translate3d(${Math.random() * 200 - 100}px, 100vh, 0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(.37,0,.63,1)',
            fill: 'forwards'
        });

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

// Event Listeners
blindBag.addEventListener('click', openBag);
openAnotherBtn.addEventListener('click', resetForNext);
resetCollectionBtn.addEventListener('click', resetCollection);
startBattleBtn.addEventListener('click', startBattle);
restartGameBtn.addEventListener('click', restartGame);
openTenBtn.addEventListener('click', openTenBags);
guessYokaiBtn.addEventListener('click', handleMysteryGuess);
mysteryNextBtn.addEventListener('click', () => initMysteryGame());
startAdventureBtn.addEventListener('click', startAdventure);
adventureRollBtn.addEventListener('click', rollAdventureAttack);
adventureAbilityBtn.addEventListener('click', activateAdventureAbility);
adventureAttackBtn.addEventListener('click', attackAdventureTarget);
adventureRerollBtn.addEventListener('click', rerollAdventureDie);
restartAdventureBtn.addEventListener('click', initAdventureSelection);
mysteryAnswer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleMysteryGuess();
    }
});
minigameModeButtons.forEach(button => {
    button.addEventListener('click', () => setMinigameMode(button.dataset.mode));
});

// Series Switching Logic
const seriesTabs = document.querySelectorAll('.series-tab');
seriesTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        seriesTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        medalliumSeries = parseInt(tab.getAttribute('data-series'));
        medalliumPage = 0;
        renderMedallium();
    });
});

medalliumPrevPage.addEventListener('click', () => {
    if (medalliumPage > 0) {
        medalliumPage--;
        renderMedallium();
    }
});

medalliumNextPage.addEventListener('click', () => {
    const seriesCount = yokaiMasterList.filter(y => y.series === medalliumSeries).length;
    const spreadCount = Math.ceil(seriesCount / (MEDALLIUM_PAGE_SIZE * 2));
    if (medalliumPage < spreadCount - 1) {
        medalliumPage++;
        renderMedallium();
    }
});

const packSeriesTabs = document.querySelectorAll('.series-pack-tab');
const packBag = document.getElementById('blindBag');

packSeriesTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        packSeriesTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSeries = parseInt(tab.getAttribute('data-series'));
        
        // Update pack visuals
        packBag.classList.remove('series-2', 'series-3', 'series-4');
        if (currentSeries === 2) {
            packBag.classList.add('series-2');
        } else if (currentSeries === 3) {
            packBag.classList.add('series-3');
        } else if (currentSeries === 4) {
            packBag.classList.add('series-4');
        }
        
        updateHeaderSeries();
    });
});

// Boot
init();

// Main Tabs Logic
const mainTabs = document.querySelectorAll('.main-tab');
const viewSections = document.querySelectorAll('.view-section');

mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        mainTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        viewSections.forEach(v => v.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');

        if (target === 'view-minigames') {
            setMinigameMode(currentMinigameMode);
        } else if (target === 'view-expendekai') {
            renderExpendekai();
        }
    });
});

// Secret Code Logic: Press Y + K + W for 300 Yo-Coins
const keysPressed = {};

document.addEventListener('keydown', (e) => {
    keysPressed[e.key.toLowerCase()] = true;
    
    // Check for 'y', 'k', 'w'
    if (keysPressed['y'] && keysPressed['k'] && keysPressed['w']) {
        yoCoins += 300;
        saveCoins();
        updateCoinsUI();
        alert("¡Código Secreto Activado! Has recibido 300 Yo-Coins.");
        
        // Reset to avoid continuous triggering
        keysPressed['y'] = false;
        keysPressed['k'] = false;
        keysPressed['w'] = false;
    }
});

document.addEventListener('keyup', (e) => {
    keysPressed[e.key.toLowerCase()] = false;
});
