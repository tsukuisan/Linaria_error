import {css} from "@linaria/core";
import {COLORS} from "@/styles/constants";


type Props = {
  foo: string,
  bar: boolean
};

const styles = {
  root: css`
    padding-block: 2px;
    padding-inline: 5px; 
    border: solid ${COLORS.blue} 1px;
  `,
  foo: css`
    color: ${COLORS.red};
  `,
  bar: css`
    font-size: 150%;
    color: ${COLORS.green};
  `
};

export const SampleComponent: React.FC<Props> = ({
  foo,
  bar
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.foo}>{foo}</div>
      {bar && <div className={styles.bar}>BAR!</div>}
    </div>
  );
};
