import { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

export const App = () => {
  console.log("----- App -----");
  const [text, setText] = useState('');
  console.log(text);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClidkClose = useCallback(() => setOpen(false), []);

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClidkClose={onClidkClose} />
    </div>
  );
};
