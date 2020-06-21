import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Column, Grid, Row} from 'react-native-responsive-grid';
import ArticleItem from '../components/articleItem';

// column width (relative to screen size)
const sizes = {sm: 100, md: 100, lg: 33.333, xl: 25};

const ArticleList = ({articles}) => {
  return (
    <Grid>
      {({state}) => (
        <Column fullHeight style={styles.mainColumn}>
          <ScrollView removeClippedSubviews={true}>
            <Row>
              {articles.map((article, index) => (
                <Column
                  key={'gridItem_' + index}
                  smSize={sizes.sm}
                  mdSize={sizes.md}
                  lgSize={sizes.lg}
                  xlSize={sizes.xl}>
                  <Row
                    smSizePoints={
                      state.layout.grid ? state.layout.grid.height / 1.5 : 0
                    }
                    mdSizePoints={
                      state.layout.grid ? state.layout.grid.width / 1.5 : 0
                    }
                    lgSizePoints={
                      state.layout.grid ? state.layout.grid.width / 3 : 0
                    }
                    xlSizePoints={
                      state.layout.grid ? state.layout.grid.width / 4 : 0
                    }
                    alignLines="stretch">
                    <ArticleItem article={article} />
                  </Row>
                </Column>
              ))}
            </Row>
          </ScrollView>
        </Column>
      )}
    </Grid>
  );
};

const styles = StyleSheet.create({
  mainColumn: {
    paddingHorizontal: 10,
  },
});

export default ArticleList;
