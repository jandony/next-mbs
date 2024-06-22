import React from 'react';
import { Row, Col } from 'antd';
import OverviewCard from '@/app/components/antd/cards/OverviewCard';

import OverviewData from '@/app/demoData/overviewData.json';

const OverviewDataList = (column: any) => {
    const OverviewDataSorted = OverviewData.slice(0, 4);

    return (
        <Row gutter={[25, 25]}>
            {OverviewDataSorted.map((item: {}, i: number) => {
                return (
                    <Col className="" md={12} xs={24} span={6} key={i}>
                        <OverviewCard data={item} contentFirst bottomStatus />
                    </Col>
                );
            })}
        </Row>
    );
};

export default OverviewDataList;
