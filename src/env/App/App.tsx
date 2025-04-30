import type { FC } from "react";

import './index.css';

import { Flag } from '@/lib/Flag';

const App: FC = () => {
    return (
        <div className="container">
            <Flag code="gr" />
            <Flag code="gr" variant="original-width" />
            <Flag code="gr" variant="original-height" />
            <Flag code="gr" variant="svg" width="60" />
        </div>
    );
};

export default App;
