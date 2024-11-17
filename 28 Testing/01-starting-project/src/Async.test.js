import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async component",()=>{
    
    test('is listitem being rendered or not', async() => {
      window.fetch = jest.fn()
      window.fetch.mockResolvedValueOnce({
        json:async ()=>[{id:"p1",title:"First one"}]
      })
      render(<Async />);
      const linkElement = await screen.findAllByRole("listitem");
      expect(linkElement).not.toHaveLength(0);
    });

    

})
