import React from 'react';
import {shallow} from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GiftGrid/>', () => {
    const category = 'One Punch';

    test('debe de mostrar el componente correctamente', () => {
            useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GiftGrid  category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imagenes en useFetchGifs', () => {
        const gifs = [{ id: 'ABC' , url: 'https://media1.giphy.com/media/l0HlJn1y7z2QkQ7p2/200w.gif',title: 'One Punch'}];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
         const wrapper = shallow(<GiftGrid  category={category}/>);
         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('p').exists()).toBe(false);
         expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})