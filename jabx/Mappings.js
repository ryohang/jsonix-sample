if (typeof jabx === 'undefined') {
  jabx = {};
}
if (!jabx.Mappings) {
  jabx.Mappings = {};
}

jabx.Credit = new Jsonix.Model.ClassInfo({
    name: 'jabx.Credit'
  });

jabx.ScorePartwise = new Jsonix.Model.ClassInfo({
    name: 'jabx.ScorePartwise'
  });

jabx.Link = new Jsonix.Model.ClassInfo({
    name: 'jabx.Link'
  });
jabx.Bookmark = new Jsonix.Model.ClassInfo({
    name: 'jabx.Bookmark'
  });
jabx.FormattedText = new Jsonix.Model.ClassInfo({
    name: 'jabx.FormattedText'
  });
{
	{
    jabx.ScorePartwise.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'credit',
          collection: true,
          elementName: new Jsonix.XML.QName('credit'),
          typeInfo: jabx.Credit
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'version',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('version')
        })];
  }
  {
    jabx.Credit.properties = [new Jsonix.Model.ElementsPropertyInfo({
          name: 'linkAndBookmarkAndCreditWords',
          collection: true,
          elementTypeInfos: [{
              elementName: new Jsonix.XML.QName('credit-words'),
              typeInfo: jabx.FormattedText
            }, {
              elementName: new Jsonix.XML.QName('link'),
              typeInfo: jabx.Link
            }, {
              elementName: new Jsonix.XML.QName('bookmark'),
              typeInfo: jabx.Bookmark
            }]
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'page',
          typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
          attributeName: new Jsonix.XML.QName('page')
        })];
  }
 {
    jabx.Bookmark.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'element',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('element')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'position',
          typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
          attributeName: new Jsonix.XML.QName('position')
        })];
  }
{
    jabx.Link.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'href',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'href')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'type',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'type')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'role',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'role')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'title',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'title')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'show',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'show')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'actuate',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'actuate')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'defaultX',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('default-x')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'defaultY',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('default-y')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'relativeX',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('relative-x')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'relativeY',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('relative-y')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'element',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('element')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'position',
          typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
          attributeName: new Jsonix.XML.QName('position')
        })];
  }
 {
    jabx.FormattedText.properties = [new Jsonix.Model.ValuePropertyInfo({
          name: 'value',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'lang',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/XML\/1998\/namespace', 'lang')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'space',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/XML\/1998\/namespace', 'space')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'lineHeight',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('line-height')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'rotation',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('rotation')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'dir',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('dir')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'letterSpacing',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('letter-spacing')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'underline',
          typeInfo: Jsonix.Schema.XSD.Int.INSTANCE,
          attributeName: new Jsonix.XML.QName('underline')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'overline',
          typeInfo: Jsonix.Schema.XSD.Int.INSTANCE,
          attributeName: new Jsonix.XML.QName('overline')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'lineThrough',
          typeInfo: Jsonix.Schema.XSD.Int.INSTANCE,
          attributeName: new Jsonix.XML.QName('line-through')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'justify',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('justify')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'valign',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('valign')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'halign',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('halign')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'defaultX',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('default-x')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'defaultY',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('default-y')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'relativeX',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('relative-x')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'relativeY',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('relative-y')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'color',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('color')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'fontFamily',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('font-family')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'fontStyle',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('font-style')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'fontSize',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('font-size')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'fontWeight',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('font-weight')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'enclosure',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('enclosure')
        })];
  }

	
	
}

jabx.Mappings.elementInfos = [{
    elementName: new Jsonix.XML.QName('score-timewise'),
    typeInfo: jabx.ScoreTimewise
  }, {
    elementName: new Jsonix.XML.QName('score-partwise'),
    typeInfo: jabx.ScorePartwise
  }];