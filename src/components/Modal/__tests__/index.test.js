// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extended-expect';
// import Modal from './Modal';

// afterEach(cleanup);

// describe('Modal component', () => {
//   it('renders', () => {
//     render(<Modal
//       onClose={mockToggleModal}
//       currentPhoto={currentPhoto}
//     />);
//   })

//   it('matches snapshot DOM node structure', () => {
//     const { asFragment } = render(<Modal
//       onClose={mockToggleModal}
//       currentPhoto={currentPhoto}
//     />);

//     expect(asFragment()).toMatchSnapshot();
//   });
// })

// describe('Click Event', () => {
//   it('calls onClose handler', () => {
//     const { getByText } = render(<Modal
//       onClose={mockToggleModal}
//       currentPhoto={currentPhoto}
//     />);
//     fireEvent.click(getByText('Close this modal'))

//     expect(mockToggleModal).toHaveBeenCalledTimes(1);
//   });
// })  