// import Head from 'next/head';
// import Image from 'next/image';
// import Heading from '../components/heading/Heading';
// import styles from '../styles/Home.module.css';
import ProdDesc from '../components/productDescription/ProdDesc';
// import { ChevronRightIcon } from '../components/iconLibrary.js';
// import Icon from '../components/Icon/Icon';

export default function Home() {
  return (
    <div className="{styles.container} mx-auto max-w-screen-sm">
      <ProdDesc
        label="Arla DANO Full Cream Milk Powder Instant"
        quantity="1 KG"
        price="182"
        category="Dairy products"
        summary="Et quidem faciunt, ut summum bonum sit extremum et rationibus conquisitis de voluptate. Sed ut summum bonum sit id, Et quidem faciunt, ut summum bonum sit extremum et rationibus conquisitis de voluptate. Sed ut summum bonum sit id,
Et quidem faciunt, ut summum bonum sit extremum et rationibus conquisitis de voluptate. Sed ut summum bonum sit id,
Et quidem faciunt, ut summum bonum sit extremum et rationibus conquisitis de voluptate. Sed ut summum bonum sit id,
Et quidem faciunt, ut summum bonum sit extremum et rationibus conquisitis de voluptate. Sed ut summum bonum sit id,"
      />
    </div>
  );
}
