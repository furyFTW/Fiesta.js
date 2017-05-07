export interface AbstractProduct {
    method(param?: any): void;

}
const TYPES = ["AssignmentExpression", "AssignmentPattern", "ArrayExpression", "ArrayPattern", "ArrowFunctionExpression", "BlockStatement", "BinaryExpression", "BreakStatement", "CallExpression", "CatchClause", "ClassBody", "ClassDeclaration", "ClassExpression", "ComprehensionBlock", "ComprehensionExpression", "ConditionalExpression", "ContinueStatement", "DoWhileStatement", "DebuggerStatement", "EmptyStatement", "ExportBatchSpecifier", "ExportDeclaration", "ExportSpecifier", "ExpressionStatement", "ForOfStatement", "ForStatement", "ForInStatement", "FunctionDeclaration", "FunctionExpression", "GeneratorExpression", "Identifier", "IfStatement", "ImportBatchSpecifier", "ImportDeclaration", "ImportSpecifier", "Literal", "LabeledStatement", "LogicalExpression", "MemberExpression", "MethodDefinition", "ModuleDeclaration", "NewExpression", "ObjectExpression", "ObjectPattern", "Program", "Property", "ReturnStatement", "SequenceExpression", "SpreadElement", "SwitchStatement", "SwitchCase", "Super", "TaggedTemplateExpression", "TemplateElement", "TemplateLiteral", "ThisExpression", "ThrowStatement", "TryStatement", "UnaryExpression", "UpdateExpression", "VariableDeclaration", "VariableDeclarator", "WhileStatement", "WithStatement", "YieldExpression", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXElement", "JSXOpeningElement", "JSXClosingElement", "JSXEmptyExpression", "JSXExpressionContainer", "JSXSpreadAttribute", "JSXAttribute"];

export class ConcreteProductA implements AbstractProduct {
    method = (param?: any) => {
        return "Method of ConcreteProductA";
    }
}
export class ConcreteProductB implements AbstractProduct {
    method = (param?: any) => {
        return `"Method of ConcreteProductB" ${param}`;
    }
}
export class ProductFactory {
    public static createProduct(type: string): AbstractProduct {
        if (type === "A") {
            return new ConcreteProductA();
        } else if (type === "B") {
            return new ConcreteProductB();
        }
        return null;
    }
}

var a: AbstractProduct = ProductFactory.createProduct("A");
var b: AbstractProduct = ProductFactory.createProduct("B");

console.log(a.method())