import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export  function useMeasure(refresh?:boolean):[any,{width:number}] {
  const ref = useRef<HTMLDivElement>();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
  useEffect(() => { 
    if (ref.current) {
      // (ro.observe(ref.current), ro.disconnect)
      ro.observe(
        ref.current,
      );
      ro.disconnect();
    }
  }, [refresh]);  
  return [{ ref }, bounds];
}
