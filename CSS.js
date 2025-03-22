Q1: What is Box model in css: defines how an HTML element's content, padding, border, and margin are structured and spaced, affecting the element's overall size and layout on the page.
		default value of box sizing : box-sizing: content-box;

Q2: Margin vs Padding : is the space around an element's border, while padding is the space between an element's border and the element's content.
		Put another way, the margin property controls the space outside an element, and the padding property controls the space inside an element.
Q3: Types of selector : universal *,    id selector #,     element selector name-p,h1,    class selector .class etc

Q4: specificity: CSS specificity is the set of rules that determine which styles are applied to an element when there are conflicting CSS declarations. 
		It is calculated based on the type of selectors used, and higher specifi city selectors will override lower ones.

Q5: Positioning in CSS 
Q6: what is flex box? Flexbox is a CSS layout module designed to provide a more efficient way to arrange and align items within a container, 
	even when their size is unknown or dynamic. It allows for responsive design and simplifies the process of creating complex layouts.

Q7: casecading ~ specificity

<Ankit> </Ankiit> inline
By default: No, <Ankit> will behave like an inline element unless you style it with display: block;.

# ==========box model============
Padding: The space between the content and the border.
Border: The border around the content and padding.
Margin: The space outside the border

Selector are pattern that are used to select and style the elements.

id selector #, Class selector .,

=================================z index====================================
z-index is a property that controls the stacking order of elements on the z-axis.
defualt value : auto
Purpose: It determines which element appears on top when elements overlap.
Elements with a higher z-index value will appear in front of elements with a lower z-index.

Works with Positioned Elements: z-index only works on elements that have a position value other than static.
This means the element must be positioned using position: relative, position: absolute, position: fixed, or position: sticky.

==============================================================================================================

Q: Pseudo-classes in CSS are used to define the special state of an element. They allow you to target an element when it is in a specific state or condition, such as when it is being hovered over, or when it has been visited.

:hover
:focus
:active
:visited
:checked

Pseudo-elements??
Pseudo-elements in CSS are used to style specific parts of an element, such as the first letter, first line, or content inserted before or after an element.
ie first leter and last letter
Q: Grid vs Flexbox
Grid: its 2D layout system that controls row and columns
Flexbox: iyts a 1D layoutr system that arrange items either in row or cloumns

Q: What is the difference between block, inline, and inline-block elements in CSS?
