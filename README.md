# Sam React Custom Components

## Input
```
label: [string]
type: [string]
name: [string]
value: [ [func]
inline: [bool]
big: [bool]
dark: [bool]
```

Example:

```
<Input label="Input Test" name="val" value={val} onChange={this.onChange} />
<Input label="Input Test" name="val" value={val} onChange={this.onChange} inline />
<Input label="Input Test" name="val" value={val} onChange={this.onChange} inline dark/>
<Input label="Input Test Big" name="val" value={val} onChange={this.onChange} big dark/>
```
