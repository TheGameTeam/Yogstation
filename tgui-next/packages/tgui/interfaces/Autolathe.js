import { classes } from 'common/react';
import { Fragment } from 'inferno';
import { useBackend } from '../backend';
import { Box, Button, ColorBox, Flex, LabeledList, Section, Tabs } from '../components';

export const Autolathe = props => {
  const { act, data } = useBackend(props);
  return (
    <Fragment>
      <Section width={109.5}>
        <Box><b>Total Amount:</b> {data.total_amount}/{data.max_amount} cm3</Box>
        <Box><b>Metal Amount:</b> {data.metal_amount} cm3</Box>
        <Box><b>Glass Amount:</b> {data.glass_amount} cm3</Box>
      </Section>

      <Flex m={-0.5} width={110}>
        <Flex.Item m={0.5} width={25}>
        <Section>
          <Box mb={1}>
            {data.categories.map((categoryName, i) => (
              <Button
                key={categoryName}
                fluid
                selected={data.selected_category === categoryName}
                color="transparent"
                content={categoryName}
                onClick={() => act('set_category', { category: categoryName })} />
            ))}
          </Box>
        </Section>
        </Flex.Item>
        <Flex.Item m={0.05} width={50}>
          <Section>
                  {data.designs.map(design => (
                    <Section m={-0.5}>
                    <Button
                      content={design.name}
                      disabled={design.disabled}
                      title={design.name}
                      onClick={() => act('make', {
                        item_id: design.id,
                        multiplier: 1,
                      })} />

                      {design.max_multiplier && (
                        <Fragment>
                          {design.max_multiplier.map(max => (
                              <Button
                                content={max + "x"}
                                onClick={() => act('make', {
                                  item_id: design.id,
                                  multiplier: max,
                                })}
                              />
                          ))}
                        </Fragment>
                      )}
                      <Fragment>
                      {" " + design.materials}
                      </Fragment>
                      </Section>
                  ))}
          </Section>
        </Flex.Item>
        <Flex.Item>
          <Section m={0.05} width={35}>
            
          </Section>
        </Flex.Item>
      </Flex>
      </Fragment>
        /*

          <LabeledList.Item label="Modes">
            {TOOLS.map(tool => (
              <Button.Checkbox
                key={tool.bitmask}
                checked={mode & tool.bitmask}
                content={tool.name}
                onClick={() => act('mode', {
                  mode: tool.bitmask,
                })} />
            ))}
          </LabeledList.Item>
          <LabeledList.Item
            label="Color">
            <Box inline
              width="64px"
              color={PAINT_COLORS[selected_color]}
              content={selected_color} />
            {Object.keys(PAINT_COLORS)
              .map(colorName => (
                <ColorBox
                  key={colorName}
                  ml={1}
                  color={PAINT_COLORS[colorName]}
                  onClick={() => act('color', {
                    paint_color: colorName,
                  })} />
              ))}
          </LabeledList.Item>
        </LabeledList>
      </Section>
      <Flex m={-0.5}>
        <Flex.Item m={0.5}>
          <Section>
            {rootCategoryIndex === 0 && (
              <Box mb={1}>
                {[1, 2, 3].map(layer => (
                  <Button.Checkbox
                    key={layer}
                    fluid
                    checked={layer === piping_layer}
                    content={'Layer ' + layer}
                    onClick={() => act('piping_layer', {
                      piping_layer: layer,
                    })} />
                ))}
              </Box>
            )}
            <Box width="108px">
              {previews.map(preview => (
                <Button
                  key={preview.dir}
                  title={preview.dir_name}
                  selected={preview.selected}
                  style={{
                    width: '48px',
                    height: '48px',
                    padding: 0,
                  }}
                  onClick={() => act('setdir', {
                    dir: preview.dir,
                    flipped: preview.flipped,
                  })}>
                  <Box
                    className={classes([
                      'pipes32x32',
                      preview.dir + '-' + preview.icon_state,
                    ])}
                    style={{
                      transform: 'scale(1.5) translate(17%, 17%)',
                    }} />
                </Button>
              ))}
            </Box>
          </Section>
        </Flex.Item>
        <Flex.Item m={0.5} grow={1}>
          <Section>
            <Tabs>
              {categories.map(category => (
                <Tabs.Tab
                  fluid
                  key={category.cat_name}
                  icon={ICON_BY_CATEGORY_NAME[category.cat_name]}
                  label={category.cat_name}>
                  {() => category.recipes.map(recipe => (
                    <Button.Checkbox
                      key={recipe.pipe_index}
                      fluid
                      ellipsis
                      checked={recipe.selected}
                      content={recipe.pipe_name}
                      title={recipe.pipe_name}
                      onClick={() => act('pipe_type', {
                        pipe_type: recipe.pipe_index,
                        category: category.cat_name,
                      })} />
                  ))}
                </Tabs.Tab>
              ))}
            </Tabs>
          </Section>
        </Flex.Item>
      </Flex>*/
    //</Fragment>
  );
};
