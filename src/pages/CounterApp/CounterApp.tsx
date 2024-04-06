import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CounterApp() {
  const [max, setMax] = useState(9999);
  const [min, setMin] = useState(0);

  const [count, setCount] = useState(min || 0);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container w-[300px] h-[100vh] flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Counter App</h1>
      <h2 className="text-3xl font-semibold mb-6">Count : {count}</h2>
      <Label className="flex flex-col items-center text-lg gap-2">
        Minimum Value
        <Input
          className="w-[150px]"
          type="number"
          placeholder="0"
          onChange={(e) => {
            setMin(parseInt(e.target.value));
            setCount(parseInt(e.target.value));
          }}
        />
      </Label>
      <Label className="flex flex-col items-center text-lg gap-2">
        Maximum Value
        <Input
          className="w-[150px] mb-6"
          type="number"
          placeholder="9999"
          onChange={(e) => setMax(parseInt(e.target.value))}
        />
      </Label>
      <Button className="text-lg" onClick={handleIncrement}>
        Increment
      </Button>
      <Button
        className="text-lg"
        variant={"destructive"}
        onClick={handleDecrement}
      >
        Decrement
      </Button>
    </div>
  );
}

export default CounterApp;
