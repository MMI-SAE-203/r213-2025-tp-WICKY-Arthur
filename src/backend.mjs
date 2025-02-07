import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {

    let data = await pb.collection('Maison').getFullList({
        sort: '-created',
    });
    // data = data.map((maison) => {
    //     maison.imageUrl = pb.files.getURL(maison, maison.Images);
    //     return maison;
    // });
    return data;
}


export async function allMaisons() {
    let records = await pb.collection('Maison').getFullList();
    records = records.map((maison) => {
        maison.imageUrl = pb.files.getURL(maison, maison.Images);
        return maison;
    });
    return records;
}

export async function getOffre(id) {
    try {
        let data = await pb.collection('maison').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.image);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

/* 

export async function oneID(id) {
    const oneRecord = await pb.collection('Maison').getOne(id);
    return oneRecord;
}

export async function allMaisonsFavori() {
    const fav = await pb.collection('Maison').getFullList({ filter: 'Favori = true' });
    return fav;
}

export async function allMaisonsSorted() {
    const price = await pb.collection('Maison').getFullList({ sort: 'Prix' });
    return price;
}

export async function bySurface(surface) {
    const supsurface = await pb.collection('Maison').getFullList({ filter: `Superficie > ${surface}` });
    return supsurface;
}

export async function surfaceORprice(surface, p) {
    const supsurfaceORinfprice = await pb.collection('Maison').getFullList({ filter: `Superficie > ${surface} || Prix < ${p}` });
    return supsurfaceORinfprice;
}

export async function getAgent(id) {
    const agentinfo = await pb.collection('Agent').getOne(id);
    return agentinfo;
}
 */