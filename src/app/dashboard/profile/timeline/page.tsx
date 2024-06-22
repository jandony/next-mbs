"use client";

import { NextPage } from 'next'
import { useEffect, useState } from 'react';

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const [state, setState] = useState(null);

    useEffect(() => {

    }, []);
    return <h1>Timeline Page!</h1>
}

export default Page