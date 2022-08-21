import React from "react";
import styled from "styled-components/macro";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeBreadCrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleWrapper>
            <TabletBreadCrumbsWrapper>
              <ShoeBreadCrumbs />
            </TabletBreadCrumbsWrapper>
            <Title>Running</Title>
          </TitleWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadCrumbsWrapper>
          <ShoeBreadCrumbs />
        </DesktopBreadCrumbsWrapper>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

const TitleWrapper = styled.div`
  & > nav {
    display: none;
    @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
      display: flex;
    }
  }
`;

const DesktopBreadCrumbsWrapper = styled.div`
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const TabletBreadCrumbsWrapper = styled.div`
  display: none;
  @media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

export default ShoeIndex;
