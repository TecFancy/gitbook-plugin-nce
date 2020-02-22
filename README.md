New Concept English audios in your book
==============

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["nce"]
}
```

You can now add YouTube videos to your book using this tag:

```markdown
Take a listen at this audio:

{% nce src="01.mp3" book="2" %}{% endyoutube %}
```
