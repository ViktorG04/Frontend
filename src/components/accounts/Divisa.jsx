import React from 'react'
import Paragraph from "../formComponents/Paragraph";

const Divisa = ({data}) => {
  return (
    <div>
      <Paragraph description="Origin" text={data.divisaOrigin}/>
      <Paragraph description="Destiny" text={data.divisaDestiny}/>
      <Paragraph description="Change" text={data.change}/>
    </div>
  );
};

export default Divisa;
