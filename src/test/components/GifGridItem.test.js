import React from 'react';
import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
   const title   = 'Title';
   const url  = 'https://media1.giphy.com/media/l0HlJn1y7z2QkQ7p2/200w.gif';
   const wrapper = shallow(<GifGridItem  title={title} url={url} />);

     test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
     });

     test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
     });

     test('debe tener una imagen con el url', () => {
         const img = wrapper.find('img');
         expect(img.prop('src')).toBe(url);
     })
})