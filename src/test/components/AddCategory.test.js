import { shallow} from "enzyme";
import '@testing-library/jest-dom';
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    });
     test("debe de mostrar el componente", () => {
         expect(wrapper).toMatchSnapshot();
     });
     test("No debe de llamar el setCategories", () => {
         wrapper.find("form").simulate("submit", {preventDefault() {}});
         expect(setCategories).toHaveBeenCalledTimes(0);
     });

        test("Debe de llamar el setCategories y limpiar la caja de texto", () => { 
            const value = "Hola Mundo";
            wrapper.find("input").simulate("change", { target: { value } });
            wrapper.find("form").simulate("submit", {preventDefault() {}});
            expect(setCategories).toHaveBeenCalled();
            expect(setCategories).toHaveBeenCalledTimes(1);
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
            expect(wrapper.find("input").prop("value")).toBe("");

        });
})