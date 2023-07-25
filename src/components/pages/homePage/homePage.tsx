import {css} from "@linaria/core";
import {NextPage} from "next";
import {SampleComponent} from "@/components/modules/sampleComponent";


type Props = {
};

const styles = {
  heading: css`
    font-size: 200%;
    font-weight: bold;
  `
};

export const HomePage: NextPage<Props> = () => {
  return (
    <main>
      <h1 className={styles.heading}>Home Page</h1>
      <SampleComponent foo="Hello" bar={true}/>
      <SampleComponent foo="Bonjour" bar={false}/>
    </main>
  );
};
