import { getGifs } from "../../services/getGifs";

describe('getGifs', () => {
    test('debe de retornar un array de  10 imágenes', async () => {
        const category = 'One Punch';
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(10);
    });
    test('debe de retornar un array de imágenes', async () => {
         const gifs = await getGifs('');
         expect(gifs.length).toBe(0);
    })
})
