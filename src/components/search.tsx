import React, {useEffect, useState } from 'react';
import Button from './Button';

interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
  onSearch: () => void;
}


function NumericKeyboard(){
  return (
    <div className="flex">
        <div className="flex-none w-14 h-14">
        </div>
        <div className="flex-none w-14 h-14">
            02
        </div>
        <div className="flex-none w-14 h-14">
            03
        </div>
    </div>
  );
};

export default NumericKeyboard;
