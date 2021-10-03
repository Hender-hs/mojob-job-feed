export interface PositionFunctionChildren {
  'id': number,
  'name': string,
  'parent_id': number,
}

export interface PositionFunction {
  'id':	number,
  'readOnly': true,
  'children':	PositionFunctionChildren[],
  'name_en':	string,
}

export interface JobsListings {
  'id': number,
  'job': {
    'id': number,
    'due_date': number,
    'title': string,
    'unit': {
      'name': string
    },
    'position_function_id': number,
    'position_function': {
      'name_en': string
    },
  }
}