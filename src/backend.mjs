import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    console.log('getOffres');

    let data = await pb.collection('Maison').getFullList(/* {
        sort: '-created',
    } */);
    data = data.map((maison) => {
        maison.imageUrl = pb.files.getURL(maison, maison.Images);
        return maison;
    });
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

export async function bySurface(surface) {
    const supsurface = await pb.collection('Maison').getFullList({ filter: `Superficie > ${surface}` });
    return supsurface;
}

export async function infPrice(p) {
    const inferiorPrice = await pb.collection('Maison').getFullList({ filter: `Prix < ${p}` });
    return inferiorPrice;
}

export async function inBetweenPrice(p1, p2) {
    const inbetweenPrice = await pb.collection('Maison').getFullList({ filter: `Prix > ${p1} && Prix<${p2}` });
    return inbetweenPrice;
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

export async function addOffre(house) {
    try {
        await pb.collection('Maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(prixMin, prixMax) {
    console.log('prixMin', prixMin);
    try {
        let data = await pb.collection('Maison').getFullList({
            // sort: '-created',
            filter: `Prix >= ${prixMin} && Prix <= ${prixMax}`
        });
        data = data.map((maison) => {
            maison.imageUrl = pb.files.getURL(maison, maison.Images);
            return maison;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant la liste des maisons', error);
        return [];
    }
}

export async function getAgents() {
    const agentinfo = await pb.collection('Agent').getFullList();
    return agentinfo;
}
export async function getAgent(id) {
    const agentinfo = await pb.collection('Agent').getOne(id);
    return agentinfo;
}

export async function allMaisonsByAgentId(id) {
    const maisonsAgent = await pb.collection('Maison').getFullList({
        filter: `agent.id = '${id}'`,
        expand: 'agent',
    });
    return maisonsAgent;
}

export async function setFavori(house) {
    await pb.collection('Maison').update(house.id, { favori: !house.Favori });
}