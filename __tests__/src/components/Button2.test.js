import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Button2 } from '../../../src/components';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


let mockOpenURL = jest.fn();

// 1. Set openURL module function to jest.fn
// jest.mock('Linking', () => ({
//     openURL: mockOpenURL,
// }));

describe('Button', () => {
    describe('Rendering', () => {
        it('should match to snapshot - Primary', () => {
            const component = shallow(<Button2 label="test label" primary />)
            expect(component).toMatchSnapshot("Primary button snapshot")
        });
        it('should match to snapshot - Secondary', () => {
            const component = shallow(<Button2 label="test label" primary={false} />)
            expect(component).toMatchSnapshot("Secondary button snapshot")
        });
    });
    describe('Interaction', () => {
        describe('onPressHandler', () => {
            it('should call onPress', () => {
                // Arrange
                const mockOnPress = jest.fn();      // 1. mock function
                const component = shallow(<Button2
                    label="test label"
                    onPress={mockOnPress}           // 2. passing in mock function as props
                />);
                const instance = component.instance();  // 3. getting an instance of component

                // Act
                instance.onPressHandler();          // 4. manually triggering onPressHandler()

                // Assert
                expect(mockOnPress).toHaveBeenCalled();
                expect(mockOnPress).toHaveBeenCalledTimes(1);   // 5. checking return values
            });
        });
    });

    // describe('Interaction', () => {
    //     describe('onPressHandler', () => {
    //         const mockOnPress = jest.fn();
    //         let instance;

    //         // 2. preparing a reusable shallow rendered instance
    //         beforeEach(() => {
    //             instance = shallow(<Button2
    //                 label="test label"
    //                 onPress={mockOnPress}
    //                 url="https://www.test.com"
    //             />).instance();
    //             jest.clearAllMocks();
    //         });

    //         it('should call onPress', () => {
    //             instance.onPressHandler();
    //             expect(mockOnPress).toHaveBeenCalled();
    //             expect(mockOnPress).toHaveBeenCalledTimes(1);
    //         });

    //         it('should call openURL if url is provided', () => {
    //             instance.onPressHandler();
    //             // 3. mockOpenURL should be called since we have passed in 'url' prop
    //             expect(mockOpenURL).toHaveBeenCalled();
    //             expect(mockOpenURL).toHaveBeenCalledTimes(1);
    //             expect(mockOpenURL).toHaveBeenCalledWith("https://www.test.com");
    //         });

    //         it('should not call openURL if url is nor provided', () => {
    //             const innerInstance = shallow(<Button2 label="test label" onPress={mockOnPress} />).instance();
    //             innerInstance.onPressHandler();
    //             // 4. mockOpenURL should NOT be called as we have NOT passed in 'url' prop
    //             expect(mockOpenURL).not.toHaveBeenCalled();
    //         });
    //     });
    // });
});