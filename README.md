# React Project?

leveling design in react using useState.

Goal try useReducer/ useContext or maybe redux.

```ts
  const [level, setLevel] = useState<number>(1);
  const [currentXP, setCurrentxp] = useState<number>(0);
  const [maxXP, setMaxXP] = useState<number>(1000);
  const [name, setName] = useState<string>("Ironman");
  const [reached, setReached] = useState<boolean>(false);
```

### Goal 

Learn more on state. change logic too

```ts

  const giveXP = () => {
    setCurrentxp((xx) => xx + 2 * 3);
    if (currentXP >= maxXP) {
      setMaxXP((xa) => xa + 5);
      setLevel((x) => x + 1);
      setCurrentxp(0);
    } else if (level === MAX_LEVEL) {
      setLevel(MAX_LEVEL);
      setReached(true);
      setCurrentxp(0);
    }
  };
```

I wanted to change this logic a bit more.