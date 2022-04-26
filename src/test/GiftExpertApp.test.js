import React from "react";
import { render } from "@testing-library/react";
import {shallow} from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";

describe("GifExpertApp", () => {
    test("debe de mostrar el componente GiftExpertApp", () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    })

        test("debe de mostrar la lista de categorias", () => {
        const categories = ['One Punch', 'Samurai X'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GiftGrid").length).toBe(categories.length);


    })
})